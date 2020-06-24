import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { isUndefined } from 'util';
import {FormGroup, Form, FormBuilder, Validators } from '@angular/forms';
import { MateriaService } from 'src/app/Services/materia.service';
import { Materia } from 'src/app/Model/Materia';


@Component({
  selector: 'app-registro-alumno',
  templateUrl: './registro-alumno.component.html',
  styleUrls: ['./registro-alumno.component.css']
})
export class RegistroAlumnoComponent implements OnInit {

  @Output() inscripcionMateria: EventEmitter<any> = new EventEmitter<any>();
  @Input() materias: Array<any> = new Array<any>();
  @Input() inscripciones: Array<any> = new Array<any>();
  public materiasP: Array<any>;
  public inscripcionesP: Array<any>;

  public nombre:string;
  public cuatrimestre: string;
  public email:string = firebase.auth().currentUser.email;//email del alumno registrado en el sistema 
  public form: FormGroup;

  public errorMessage: string;
  public error: boolean;
  public success: boolean;

  constructor(private materiaService:MateriaService , private fb: FormBuilder,private fireStore: AngularFirestore){ 
   
    this.materiasP = new Array<any>();
    this.inscripcionesP = new Array<any>();

    this.form = this.fb.group({
      materia:['',Validators.required],
      cuatrimestre:['',Validators.required]
    });
  }


  ngOnInit() {
  this.materiasP=this.materias;
  this.inscripcionesP=this.inscripciones;
  }
  

  crear()
  {
    let materia;

    let ok = this.validar();

    if(ok)
    {
      
      //me inscribo a la materia    
      this.fireStore.collection("Inscripciones").add({
        nombre: this.nombre,//es el nombre de la materiaa 
        cuatrimestre: this.cuatrimestre,
        alumno: this.email //inscribo al alumno con su correo 
      }).catch(function(error)
      {
        this.error = true;
        this.errorMessage = "Error al registrarse ";
      });
      //recorro las materias 
      this.materias.forEach(mat =>
        {
          if(mat.nombre == this.nombre)
          {
            materia = mat;
          }
        });

        //actualizo la materia
        const Materia: Materia = {
          id:materia.id,
          nombre: materia.nombre,
          cuatrimestre: materia.cuatrimestre,
          cupo: materia.cupo-1,
          profesor:materia.profesor,
      
        };
        this.materiaService.Modificar(Materia).catch(function(error){
          this.error=true;
          this.errorMessage="Error al cargar";
        });
     
      //devuelvo el ouput de los registro que se dieron de alta en la base 
      this.inscripcionMateria.emit(false);
    }
  }

  cerrar()
  {
    this.inscripcionMateria.emit(false);
  }

  validar()
  {
    let retorno: boolean = true;
    let okCuat:boolean = true

    this.nombre = this.form.get('materia').value,
    this.cuatrimestre = this.form.get('cuatrimestre').value,

    this.materias.forEach(mat =>
    {
      if(mat.nombre == this.nombre && mat.cuatrimestre != this.cuatrimestre)
      {
        okCuat = false;
        this.error = true;
        this.errorMessage = "Ocurrio un error con la materia ";
      }
    });


    this.inscripciones.forEach(ins=>
    {
      if(ins.nombre == this.nombre && ins.cuatrimestre == this.cuatrimestre && ins.alumno == this.email)
      {
        retorno = false;
        this.error = true;
        this.errorMessage = "ya estas inscripto en la materia";
      }
    });

    if(!okCuat)
    {
      retorno = false;
      this.error = true;
      this.errorMessage = "El cuatrimestre no es valido";
    }

    if(isUndefined(this.nombre))
    {
      retorno = false;
      this.error = true;
      this.errorMessage = "ocurrio un error con el nombres";
    }

    return retorno;
  }

}
