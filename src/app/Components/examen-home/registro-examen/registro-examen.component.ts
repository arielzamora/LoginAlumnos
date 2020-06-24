import { Component, OnInit ,Output,Input,EventEmitter} from '@angular/core';
import * as firebase from 'firebase';
import {FormGroup, Form, FormBuilder, Validators } from '@angular/forms';
import { MateriaService } from 'src/app/Services/materia.service';
import { Materia } from 'src/app/Model/Materia';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { isUndefined } from 'util';



@Component({
  selector: 'app-registro-examen',
  templateUrl: './registro-examen.component.html',
  styleUrls: ['./registro-examen.component.css']
})

export class RegistroExamenComponent implements OnInit {

  @Output() cerrarListaExamenes: EventEmitter<any> = new EventEmitter<any>();
  @Input() materias: Array<any> = new Array<any>();//listado de materias
  @Input() inscripciones: Array<any> = new Array<any>();//listado de inscripciones
  public materiasProfesor: Array<any>;
  public inscripcionesProfesor: Array<any>;

  @Input() profesor:string;
  public materia:string;
  public cuatrimestre: number;
  public nota: number;
  public alumno: string;
  public imagen:string;
  public form: FormGroup;

  public errorMessage: string;
  public error: boolean;
  public success: boolean;
  public materiaObj:Materia;

  constructor(private materiaService:MateriaService , private fb: FormBuilder,private fireStore: AngularFirestore){ 
   
    this.materiasProfesor = new Array<any>();
    this.inscripcionesProfesor = new Array<any>();

    this.form = this.fb.group({
      profesor:['',Validators.required],
      materia:['',Validators.required],//cargo materias a cargo
      cuatrimestre:['',Validators.required],
      nota:['',Validators.required],
      alumno:['',Validators.required]//cargo alumnos inscriptos
    });
  }


  ngOnInit() {
/*   this.materiasProfesor=this.materias;
  this.inscripcionesProfesor=this.inscripciones; */
  this.cargoComboMaterias();
  this.cargoComboAlumnos();
  }
  
   
  cargoComboMaterias()
  {
      //recorro las materias 
      this.materias.forEach(mat =>
        {
          if(mat.profesor == this.profesor) //nombre de materia
          {
            this.materiasProfesor.push(mat);
          }
        });
  }
  cargoComboAlumnos()
  {

    this.materiasProfesor.forEach(mat=>{

      //recorro las inscripciones 
      this.inscripciones.forEach(alum =>
        {
          if(alum.nombre == mat.nombre)  //nombre de materia
          {
            this.inscripcionesProfesor.push(alum);
          }
        });
    })

  }


  crearExamen()
  {
    let materia;

    let ok = this.validar();

    if(ok)
    {
      //me inscribo a la materia    
      this.fireStore.collection("Examenes").add({
        profesor:this.profesor,
        materia: this.materia,
        cuatrimestre: this.cuatrimestre,
        nota:this.nota,
        alumno: this.alumno,
        fecha:Date.now,
        imagen:this.imagen
      }).catch(function(error)
      {
        this.error = true;
        this.errorMessage = "Error al registrarse ";
      });
        
      //devuelvo el ouput de los registro que se dieron de alta en la base 
      this.cerrarListaExamenes.emit(false);
    }
  }

  cerrar()
  {
    this.cerrarListaExamenes.emit(false);
  }

  validar()
  {
    let retorno: boolean = true;
    let okCuat:boolean = true

    this.materia=this.form.get('materia').value;
    this.cuatrimestre=this.form.get('cuatrimestre').value;
    this.nota=this.form.get('nota').value;
    this.alumno=this.form.get('alumno').value;

    if(this.nota < 0 || this.nota > 10)
    {

      this.error = true;
      this.errorMessage = "Ocurrio un error con la nota ";
      retorno=false;
    }

     //recorro las materias 
     this.materiasProfesor.forEach(mat =>
      {
        if(mat.nombre == this.materia)
        {
         this.materiaObj = mat;
        }
      }); 

      this.imagen=this.materiaObj.imagen;

      return retorno;
   } 

}
