import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Materia } from 'src/app/Model/Materia';
import { MateriaService } from 'src/app/Services/materia.service';
import { User } from 'src/app/Model/User';
import { ClienteService } from 'src/app/Services/cliente.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-alumno-home',
  templateUrl: './alumno-home.component.html',
  styleUrls: ['./alumno-home.component.css']
})
export class AlumnoHomeComponent implements OnInit {

  listadoMaterias: Materia[];
  private idCliente: number;

  public materias: Array<any>;
  public inscripciones: Array<any>;
  public inscripcionMateria:boolean = false;
  public listaMaterias:boolean = false;
  public listaNotas:boolean=false;

  constructor(private fireStore: AngularFirestore,private materiaService: MateriaService) {

    this.materias = new Array<any>();
    this.inscripciones = new Array<any>();
  }

  ngOnInit() {
    this.cargarListaMaterias();
    this.cargarListaInscripciones();
  }


  cargarListaMaterias() {

    let materias = this.fireStore.collection("Materias").valueChanges();

    materias.forEach(materia=>
      {
        materia.forEach(item=>
          {
            this.materias.push(item);
          })
      });
  }

  cargarListaInscripciones()
  {
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
