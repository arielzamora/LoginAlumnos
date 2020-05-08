import { Component, Input,OnInit, EventEmitter, Output, ViewChild ,ElementRef} from '@angular/core';
import { FormBuilder, FormGroup, FormControl,  Validators } from '@angular/forms';


import {Router}from '@angular/router';
import {AuthService } from './../../../services/auth.service';
import {ActorService} from './../../../services/actor.service';
import {AngularFireStorage}from '@angular/fire/storage';

import { actor } from 'src/app/model/actor';
import { pelicula } from 'src/app/model/pelicula';

@Component({
  selector: 'app-alta-actor',
  templateUrl: './alta-actor.component.html',
  styleUrls: ['./alta-actor.component.scss']
})
export class AltaActorComponent implements OnInit {
  @Output() registradoCorrectamente: EventEmitter<any>;
  public form: FormGroup;
  public errorMessage: string;
  public error: boolean;
  public success: boolean;

  file;
  actor:actor={};
  @Input() showModalRegistro: boolean;
  @Output() closeModal: EventEmitter<void>;


  submitted = false;

  get f() { return this.form.controls; }

constructor(private fb: FormBuilder,public actorService:ActorService,public afAuth:AuthService,private router:Router,private fireStore:AngularFireStorage) {
  this.closeModal = new EventEmitter<void>();
  this.registradoCorrectamente = new EventEmitter<any>();
  
}

ngOnInit() {

  this.form = this.fb.group({
    idActor: ['', Validators.required],
    nombre : ['', Validators.required],
    apellido : ['', Validators.required],
    fechaNacimiento : ['', Validators.required],
    sexo : ['', Validators.required],
    nacionalidad : ['', Validators.required],
    foto : ['', Validators.required]
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
    if (this.form.valid) {

      this.actor.idActor = this.form.get('idActor').value;
      this.actor.nombre = this.form.get('nombre').value;
      this.actor.apellido = this.form.get('apellido').value;
      this.actor.fechaNacimiento = this.form.get('fechaNacimiento').value;
      this.actor.sexo = this.form.get('sexo').value;
      this.actor.nacionalidad = this.form.get('nacionalidad').value;
      this.actor.foto = 'https://s5.postimg.cc/537jajaxj/default.png';

      this.actorService.Registrar(this.actor)
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
    idActor: ['', Validators.required],
    nombre : ['', Validators.required],
    apellido : ['', Validators.required],
    fechaNacimiento : ['', Validators.required],
    sexo : ['', Validators.required],
    nacionalidad : ['', Validators.required],
    foto : ['', Validators.required]
  });
}

cerrar() {
  this.closeModal.emit();
  this.form.reset();
}

}
