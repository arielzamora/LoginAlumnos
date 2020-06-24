import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { Materia } from 'src/app/Model/Materia';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-detalle-materia',
  templateUrl: './detalle-materia.component.html',
  styleUrls: ['./detalle-materia.component.css']
})
export class DetalleMateriaComponent implements OnInit {

  public img:string;
  public nombre:string;
  @Input() materia: Materia;
  @Input() profesor:string;
  @Input() inscripciones: Array<any> = new Array<any>();
  @Input() usuarios: Array<any> = new Array<any>();
  public inscrip: Array<any> = new Array<any>();



  constructor(private fireStore:AngularFirestore,public domSanitizer: DomSanitizer) { }

  ngOnInit()
  {


    let email:string = firebase.auth().currentUser.email;

    this.img=this.materia.imagen;
    this.nombre=this.materia.nombre;

      //obtengo las inscripciones por la materia seleccionada  
      this.inscripciones.forEach(ins=>
        {
            if(ins.nombre == this.materia.nombre)
            {
              this.inscrip.push(ins);
            }
          });
        

  }

}
