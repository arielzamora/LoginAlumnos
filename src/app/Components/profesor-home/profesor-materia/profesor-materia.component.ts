import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-profesor-materia',
  templateUrl: './profesor-materia.component.html',
  styleUrls: ['./profesor-materia.component.css']
})
export class ProfesorMateriaComponent implements OnInit {

  @Output() cerrarListaMat: EventEmitter<any> = new EventEmitter<any>();
  @Input() materias: Array<any> = new Array<any>();
  public mats: Array<any> = new Array<any>();
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
          this.mats.push(mat);
        }
      });
  }

}
