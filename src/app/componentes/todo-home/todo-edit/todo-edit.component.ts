
import { Component, Input,OnInit, EventEmitter, Output, ViewChild ,ElementRef} from '@angular/core';
import { FormBuilder, FormGroup, FormControl,  Validators } from '@angular/forms';

import {Router}from '@angular/router';
import {AuthService } from './../../../services/auth.service';
import {TodoService } from './../../../services/todo.service';
import {AngularFireStorage}from '@angular/fire/storage';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {
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
    idTodo: ['', Validators.required],
    descripcion: ['', Validators.required],
    estado: ['', Validators.required]
  });

}
 

Submit()
{

  this.errorMessage = '';
    this.error = false;
    this.success = false;
    this.submitted=true;

    if (this.form.valid) {

      this.todo.estado = this.form.get('estado').value;

      this.todoService.CambiarEstado(this.todo)
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
              this.errorMessage = "error al registrar Todo";
            }
          }
        )
        .catch(
          error => {
            this.error = true;
            this.errorMessage = "error al registrar Todo";
            console.log(error);
          }
        );
    } else {
      this.errorMessage = 'Debe completar los campos correctamente.';
      this.error = true;
    }
  }



  cargarModal(todo:Todo) {
    this.todo=todo;
    this.cargarForm();
  }
  
  cargarForm(){
    this.form = this.fb.group({
      idTodo: [this.todo.idTodo, Validators.required],
      descripcion: [this.todo.descripcion, Validators.required],
      estado: [this.todo.estado, Validators.required]
    });
  }
  

cerrar() {
  this.closeModal.emit();
  this.form.reset();
}

}

