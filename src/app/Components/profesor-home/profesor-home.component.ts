import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Component({
  selector: 'app-profesor-home',
  templateUrl: './profesor-home.component.html',
  styleUrls: ['./profesor-home.component.css']
})
export class ProfesorHomeComponent implements OnInit {

  public materias: Array<any>;
  public inscripciones: Array<any>;
  public materiasCargo:boolean = false;
  public alumnosMateria:boolean = false;

  constructor(private fireStore: AngularFirestore)
  {
    this.materias = new Array<any>();
    this.inscripciones = new Array<any>();
  }

  ngOnInit()
  {
    let materias = this.fireStore.collection("Materias").valueChanges();

    materias.forEach(materia=>
      {
        materia.forEach(item=>
          {
            this.materias.push(item);
          })
      });

    let inscripciones = this.fireStore.collection("Inscripciones").valueChanges();

    inscripciones.forEach(ins=>
      {
        ins.forEach(item=>
          {
            this.inscripciones.push(item);
          })
      });
  }

}