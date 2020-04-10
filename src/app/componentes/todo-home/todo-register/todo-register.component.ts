
import { Component, Input,OnInit, EventEmitter, Output, ViewChild ,ElementRef} from '@angular/core';
import { FormBuilder, FormGroup, FormControl,  Validators } from '@angular/forms';


import {Router}from '@angular/router';
import {AuthService } from './../../../services/auth.service';
import {TodoService } from './../../../services/todo.service';
import {AngularFireStorage}from '@angular/fire/storage';
import { Registro } from 'src/app/common/registro';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'app-todo-register',
  templateUrl: './todo-register.component.html',
  styleUrls: ['./todo-register.component.scss']
})
export class TodoRegisterComponent implements OnInit  {
  @Output() registradoCorrectamente: EventEmitter<any>;
  public form: FormGroup;
  public errorMessage: string;
  public error: boolean;
  public success: boolean;

  file;
  todo:Todo={};
  @Input() showModalRegistro: boolean;
  @Output() closeModal: EventEmitter<void>;

  submitted = false;

  get f() { return this.form.controls; }

constructor(private fb: FormBuilder,public todoService:TodoService,public afAuth:AuthService,private router:Router,private fireStore:AngularFireStorage) {
  this.closeModal = new EventEmitter<void>();
  this.registradoCorrectamente = new EventEmitter<any>();
  
}

ngOnInit() {

  this.form = this.fb.group({
    idTodoEdit: ['', Validators.required],
    descripcionEdit: ['', Validators.required],
    fotoEdit: ['', Validators.required],
    estadoEdit: ['', Validators.required]
  });

}
 
onFileChange(event) {
  const reader = new FileReader();
  if (event.target.files && event.target.files.length > 0) {
    const file = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.file = {
        filename: file.name,
        filetype: file.type,
        value: reader.result.toString().split(',')[1]
      };
    };
  }
}

ValidarFoto(foto): Boolean {
  if (foto) {
    return (foto.filetype === 'image/jpeg'
    || foto.filetype === 'image/png'
    || foto.filetype === 'image/gif');
  } else {
    return true;
  }
}


Submit()
{

  this.errorMessage = '';
    this.error = false;
    this.success = false;
    this.submitted=true;
    const fotoValida = this.ValidarFoto(this.file);
    if (this.form.valid && fotoValida) {

      this.todo.idTodo = this.form.get('idTodoEdit').value;
      this.todo.descripcion = this.form.get('descripcionEdit').value;
      this.todo.estado = this.form.get('estadoEdit').value;
      this.todo.tipoFoto = this.file.filename;
      this.todo.nombreFoto = this.file.filetype;
      this.todo.foto = this.file.value;

      this.todoService.Registrar(this.todo)
        .then(
          response => {
            console.log(response);
            if (response) {
              this.success = true;
              this.form.reset();
              this.registradoCorrectamente.emit();
              this.cerrar();
            } else {
              this.error = true;
              this.errorMessage = "error al registrar un Todo";
            }
          }
        )
        .catch(
          error => {
            this.error = true;
            this.errorMessage = "error al registrar un Todo";
            console.log(error);
          }
        );
    } else if (!fotoValida) {
      this.errorMessage = 'El archivo debe ser una imagen.';
      this.error = true;
    } else {
      this.errorMessage = 'Debe completar los campos correctamente.';
      this.error = true;
    }
  }



cargarModal() {
  //this.cargarForm();
}

cargarForm(){
  this.form = this.fb.group({
    idTodoEdit: ['', Validators.required],
    descripcionEdit: ['', Validators.required],
    fotoEdit: ['', Validators.required]
  });
}

cerrar() {
  this.closeModal.emit();
  this.form.reset();
}

}
