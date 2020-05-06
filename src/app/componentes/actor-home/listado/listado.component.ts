import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output,ViewChild, EventEmitter } from '@angular/core';
import { actor } from './../../../model/actor';
import { ActorService } from './../../../services/actor.service';
import { AltaActorComponent } from './../../actor-home/alta-actor/alta-actor.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  @ViewChild('modalRegistro',{static:false}) modalRegistro: AltaActorComponent;
  @Input() listaActorxPeli: actor[];
  listaActoresPeli: actor[];
  @Output() actorCargado = new EventEmitter<actor>();
  @Input() modoPelicula: boolean;
  @Input() modoAltaEnPelicula: boolean;
  @Input() title: string;
  @Output() refrescarEvent: EventEmitter<void>;
  form: FormGroup;
  error: boolean;
  errorMessage: string;
  showModal: boolean;
  showModalRegistro: boolean;
  listaActor: actor[];

 
  data:Array<any>;

  constructor(private actorService: ActorService, private fb: FormBuilder,public domSanitizer: DomSanitizer) {
    this.refrescarEvent = new EventEmitter<void>();
    this.cargarLista();
  }

  ngOnInit() {
  }


  public cargarLista() {
   
      this.actorService.Listar().subscribe(
        data => {
          this.listaActor = data;
        },
        error => {
          console.log(error);
        }
      );

  }


  showRegistroModal() {
    this.modalRegistro.cargarModal();
    this.showModalRegistro = true;
  }
  agregoActorPelicula(actor:actor){
   
   this.listaActoresPeli= new Array<any>();
   this.listaActoresPeli.push(actor);
   this.actorCargado.emit(actor);

  }

  refrescar() {
    this.refrescarEvent.emit();
  }

  darDeBaja(actor:actor) {
    this.actorService.Eliminar(actor).
    then( response => {
      this.cargarLista();
    },
    error => {
      console.log(error);
    });
  }


  
  }

