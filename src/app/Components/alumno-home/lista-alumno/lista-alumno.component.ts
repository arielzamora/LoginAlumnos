import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-lista-alumno',
  templateUrl: './lista-alumno.component.html',
  styleUrls: ['./lista-alumno.component.css']
})
export class ListaAlumnoComponent implements OnInit {

  @Output() cerrarListaMat: EventEmitter<any> = new EventEmitter<any>();
  @Input()  materias: Array<any> = new Array<any>();
  @Input()  inscripciones: Array<any> = new Array<any>();
  public mats: Array<any> = new Array<any>();

  constructor() { }

  ngOnInit()
  {
    let email:string = firebase.auth().currentUser.email;

    this.inscripciones.forEach(ins =>
    {
      this.materias.forEach(mat =>
        {
          if(ins.nombre == mat.nombre && ins.alumno == email)
          {
            this.mats.push(mat);
          }
        });
    });
  }
}
