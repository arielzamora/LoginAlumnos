import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import * as firebase from 'firebase';
import { MateriaAlumno } from '../../../Model/MateriaAlumno';


@Component({
  selector: 'app-alumno-materia',
  templateUrl: './alumno-materia.component.html',
  styleUrls: ['./alumno-materia.component.css']
})
export class AlumnoMateriaComponent implements OnInit {

  
  @Output() cerrarListaAlumn: EventEmitter<any> = new EventEmitter<any>();
  @Input() materias: Array<any> = new Array<any>();
  @Input() inscripciones: Array<any> = new Array<any>();
  public mats: Array<any> = new Array<any>();
  public info: Array<any> = new Array<any>();
  user:any;

  constructor() { }

  ngOnInit()
  {
    let data = localStorage.getItem('usuario');  

    if(data)
    {
      this.user=JSON.parse(data);
    }

    this.materias.forEach(mat =>
      {
        if(mat.profesor == this.user.nombre)
        {
          this.mats.push(mat);//Materias que da el profesor
        }
      });

    this.inscripciones.forEach(ins =>
      {
        this.mats.forEach(mat =>
          {
            if(mat.nombre == ins.nombre)
            {
              let alumno: MateriaAlumno = new MateriaAlumno(ins.alumno, "alumno", mat.nombre);
              this.info.push(alumno)//Aca tendria que agregar los datos de la materia tambien, por lo menos el nombre
            }

          });
      });
  }

}
