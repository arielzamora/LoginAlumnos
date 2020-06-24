import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Materia } from 'src/app/Model/Materia';
import { MateriaService } from 'src/app/Services/materia.service';
import { User } from 'src/app/Model/User';
import { ClienteService } from 'src/app/Services/cliente.service';

@Component({
  selector: 'app-materia-home',
  templateUrl: './materia-home.component.html',
  styleUrls: ['./materia-home.component.css']
})
export class MateriaHomeComponent implements OnInit {
  listaMaterias: Materia[];
  listaUsuarios:User[];
  form: FormGroup;
  public altaMateria:boolean = false;
  public selectUsuarios:boolean = false;
  public selectMaterias:boolean = false;
  public materiasAcargo:boolean = false;
  public borrados:boolean = false;
  public registrarMateria:boolean=false;
  public inscripciones = new Array<any>();

  constructor(private fireStore:AngularFirestore, private usuarioService: ClienteService,private materiaService: MateriaService, private fb: FormBuilder) {
    this.form = this.fb.group({
      local: ['1'],
      repetidos: ['Todos']
    });

    this.onChanges();
    this.cargarLista();
    this.cargarListaUsuarios();
    this.cargarInscripciones();
  }

  ngOnInit() {

    //cargo con las listas de inscripciones en el cawso de que las hubiera para podeer enviearselas al detalle de la materaia


  }

  onChanges(): void {
    this.form.valueChanges.subscribe(val => {
      this.cargarLista();
    });
  }

  cargarInscripciones(){
    let inscripciones = this.fireStore.collection("Inscripciones").valueChanges();

    inscripciones.forEach(ins=>
      {
        ins.forEach(item=>
          {
            this.inscripciones.push(item);
          })
      });
  }

  cargarLista() {

    this.registrarMateria=false;
      this.materiaService.Listar().subscribe(response => {
        this.listaMaterias = response;
      });


  }

  cargarListaUsuarios() {

    this.usuarioService.Listar().subscribe(response => {
      this.listaUsuarios = response;
    });


}

}
