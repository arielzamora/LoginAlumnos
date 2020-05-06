import { Component, Input,OnInit, EventEmitter, Output, ViewChild ,ElementRef} from '@angular/core';
import { FormBuilder, FormGroup, FormControl,  Validators } from '@angular/forms';


import {Router}from '@angular/router';
import {AuthService } from './../../../services/auth.service';
import {PeliculaService } from './../../../services/pelicula.service';
import {AngularFireStorage}from '@angular/fire/storage';

import { pelicula } from 'src/app/model/pelicula';
import { actor } from 'src/app/model/actor';

@Component({
  selector: 'app-alta-pelicula',
  templateUrl: './alta-pelicula.component.html',
  styleUrls: ['./alta-pelicula.component.scss']
})
export class AltaPeliculaComponent implements OnInit {
  @Output() registradoCorrectamente: EventEmitter<any>;
  public form: FormGroup;
  public errorMessage: string;
  public error: boolean;
  public success: boolean;

  file;
  pelicula:pelicula={};
  listaActoresPeli:actor[];
  @Input() showModalRegistro: boolean;
  @Output() closeModal: EventEmitter<void>;

  submitted = false;

  get f() { return this.form.controls; }
  esAltaPelicula:boolean;

constructor(private fb: FormBuilder,public peliculaService:PeliculaService,public afAuth:AuthService,private router:Router,private fireStore:AngularFireStorage) {
  this.closeModal = new EventEmitter<void>();
  this.registradoCorrectamente = new EventEmitter<any>();
  this.esAltaPelicula=true;
  
}

ngOnInit() {

  this.form = this.fb.group({
    idPelicula: ['', Validators.required],
    nombre: ['', Validators.required],
    tipo: ['', Validators.required],
    cantidadPublico: ['', Validators.required],
    fechaEstreno: ['', Validators.required],
    fotoPelicula: ['', Validators.max(100)]
  });

}
 
cargoActorEnPeli(actor:actor)
{
  if(!this.listaActoresPeli)
  {
    this.listaActoresPeli= new Array<any>();
    //recorro la lista para ver si existe 
    this.listaActoresPeli.push(actor);
  }else{
    this.listaActoresPeli.push(actor);
  }
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
    //const fotoValida = this.ValidarFoto(this.file);
    //if (this.form.valid && fotoValida) {
    if (this.form.valid) {
     
      this.pelicula.idPelicula = this.form.get('idPelicula').value;
      this.pelicula.nombre = this.form.get('nombre').value;
      this.pelicula.tipo = this.form.get('tipo').value;
      this.pelicula.cantidadPublico = this.form.get('cantidadPublico').value;
      this.pelicula.fechaEstreno = this.form.get('fechaEstreno').value;
      this.pelicula.fotoPelicula = this.form.get('fotoPelicula').value;


      //this.pelicula.fotoPelicula = this.file.value;

      this.peliculaService.Registrar(this.pelicula)
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
  this.esAltaPelicula=true;
}
cargarModalActor(pelicula:pelicula) {
  this.esAltaPelicula=false;  
  this.cargarForm(pelicula);
}
cargarForm(pelicula:pelicula){
  this.form = this.fb.group({
    idPelicula: [pelicula.idPelicula, ''],
    nombre: [pelicula.nombre, ''],
    tipo: [pelicula.tipo, ''],
    cantidadPublico: [pelicula.cantidadPublico, ''],
    fechaEstreno: [pelicula.fechaEstreno, '']
  });
}

cerrar() {
  this.closeModal.emit();
  this.form.reset();
}

}
