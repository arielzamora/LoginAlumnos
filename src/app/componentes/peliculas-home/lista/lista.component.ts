import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output,ViewChild, EventEmitter } from '@angular/core';
import { pelicula } from './../../../model/pelicula';
import { PeliculaService } from './../../../services/pelicula.service';
import { AltaPeliculaComponent } from './../../peliculas-home/alta-pelicula/alta-pelicula.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  @ViewChild('modalRegistro',{static:false}) modalRegistro: AltaPeliculaComponent;
  @Input() listaPeliculas: pelicula[];
  @Input() title: string;
  @Input() enAlta: boolean;
  @Output() refrescarEvent: EventEmitter<void>;
  form: FormGroup;
  error: boolean;
  errorMessage: string;
  showModal: boolean;
  pelicula:pelicula={};
  showModalRegistro: boolean;

  data:Array<any>;
  dataFiltros: pelicula[];
  filterPost:string;
  public existe: boolean;
  constructor(private peliculaService: PeliculaService, private fb: FormBuilder,public domSanitizer: DomSanitizer) {
    this.refrescarEvent = new EventEmitter<void>();
    this.filterPost ="";
    this.cargarLista();
    this.enAlta=true;
  }

  ngOnInit() {
  }


  public cargarLista() {
   
    if(!this.listaPeliculas){
      this.peliculaService.Listar().subscribe(
        data => {
          this.listaPeliculas = data;
         // this.dataFiltros=this.listaPeliculas;
        },
        error => {
          console.log(error);
        }
      );
    }

  }


  showRegistroModal() {
    this.modalRegistro.cargarModal();
    this.showModalRegistro = true;
  }


  refrescar() {
    this.refrescarEvent.emit();
  }

  darDeBaja(pelicula:pelicula) {
    this.peliculaService.Eliminar(pelicula).
    then( response => {
      this.cargarLista();
    },
    error => {
      console.log(error);
    });
  }

  verDetalle(pelicula:pelicula) {
   
  this.existe=true;
  this.pelicula=pelicula;

  }
  agregarActor(pelicula:pelicula) {
    this.modalRegistro.cargarModalActor(pelicula);
    this.showModalRegistro = true;
  
    }
}