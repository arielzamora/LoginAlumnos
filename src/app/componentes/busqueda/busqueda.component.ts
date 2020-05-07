import { Component, OnInit } from '@angular/core';
import {PeliculaService } from './../../services/pelicula.service';
import {ActorService } from './../../services/actor.service';
import { FormBuilder, FormGroup, FormControl,  Validators } from '@angular/forms';

import { pelicula } from 'src/app/model/pelicula';
import { actor } from 'src/app/model/actor';
import { newArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  public listaPeliculas: Array<any>;
  public listaPeliBusqueda: Array<any>;
  public listaActoresBusqueda: Array<any>;
  public listaActores: Array<any>;
  public nombre: string;
  public tipo:string;
  public existe: boolean;
  public verActo: boolean;
  public verPeli: boolean;
  public pelicula: pelicula;
  public actor: actor;
  public form: FormGroup;
  get f() { return this.form.controls; }
  constructor(private fb: FormBuilder,private peliculaService: PeliculaService,private actorService:ActorService) { 
    this.verActo=false;
    this.verPeli=false;
  }

  ngOnInit(){
    this.form = this.fb.group({
      tipo: ['', Validators.required],
      nombre: ['', Validators.required]
    });
    this.cargarListaPelicula();
    this.cargarListaActores();
  }

  public cargarListaActores(){

      this.actorService.Listar().subscribe(
        data => {
          this.listaActores = data;
        },
        error => {
          console.log(error);
        }
      );
  }

  public cargarListaPelicula() {
   
      this.peliculaService.Listar().subscribe(
        data => {
          this.listaPeliculas = data;
        },
        error => {
          console.log(error);
        }
      );
  }

  buscar()
  {
    
    this.tipo = this.form.get('tipo').value;
    this.nombre= this.form.get('nombre').value;
    this.existe = false;
    if(this.tipo=='Actores')
    {
      
      this.listaActoresBusqueda= new Array<any>();
      this.listaActores.forEach(act=>
        {
          if(act.nombre == this.nombre)
          {
            this.actor = act;
            //cargo la lista con el actor para mostrar solo un registro
            this.listaActoresBusqueda.push(act);
            this.existe = true;
            this.verActo=true;
            this.verPeli=false;
          }
        });
  
        if(!this.existe)
        {
          this.verActo=false;
          this.verPeli=false;
          alert("el actor no se encuentra en nuestra base de datos")
        }
    }else{
      this.listaPeliBusqueda= new Array<any>();
      
      this.listaPeliculas.forEach(peli=>
        {
          if(peli.nombre == this.nombre)
          {
            this.pelicula = peli;
            this.listaPeliBusqueda.push(peli);
            this.existe = true;
            this.verPeli=true;
            this.verActo=false;
          }
        });
  
        if(!this.existe)
        {
          this.verActo=false;
          this.verPeli=false;
          alert("La pelicula no se encuentra en nuestra base de datos")
        }
    }
  
  }


}
