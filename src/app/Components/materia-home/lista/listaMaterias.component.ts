import { User } from '../../../Model/User';
import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Materia } from 'src/app/Model/Materia';

@Component({
  selector: 'app-lista-materias',
  templateUrl: './listaMaterias.component.html',
  styleUrls: ['./listaMaterias.component.scss']
})
export class ListaMaterias implements OnInit {
  @Input() listaMaterias: Materia[];
  @Input() inscripciones: Array<any> = new Array<any>();
  @Input() listaUsuarios: Array<any> = new Array<any>();
  @Output() cerrarListaMateria: EventEmitter<any> = new EventEmitter<any>();
  public usuarios= new Array<any>();
  public inscripcione= new Array<any>();
  public mostrarDetalleMateria:boolean;
  public materiaSeleccionada :Materia;


  constructor() { 
    this.mostrarDetalleMateria=false;
  }

  ngOnInit() {
    this.usuarios=this.listaUsuarios;
    this.inscripcione=this.inscripciones;
  }

  mostrarDetalle(materia:Materia)
  {
    this.materiaSeleccionada=materia;
    this.mostrarDetalleMateria=true;
  }

}
