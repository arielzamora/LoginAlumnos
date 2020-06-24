import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';
import { Materia } from 'src/app/Model/Materia';
import * as firebase from 'firebase';

@Component({
  selector: 'app-materia-nota',
  templateUrl: './materia-nota.component.html',
  styleUrls: ['./materia-nota.component.css']
})
export class MateriaNotaComponent implements OnInit {

  @Output() cerrarListaMat: EventEmitter<any> = new EventEmitter<any>();
  @Input() materias: Array<any> = new Array<any>();
  @Input() inscripciones: Array<any> = new Array<any>();
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
            let insMat:Materia = new Materia(mat.nombre, mat.cuatrimestre,mat.cupo, mat.profesor, ins.nota);
            this.mats.push(insMat);
          }
        });
    });
  }
}
