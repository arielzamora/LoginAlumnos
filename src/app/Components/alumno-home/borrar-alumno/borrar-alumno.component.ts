import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { isUndefined } from 'util';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-borrar-alumno',
  templateUrl: './borrar-alumno.component.html',
  styleUrls: ['./borrar-alumno.component.css']
})
export class BorrarAlumnoComponent implements OnInit {

  @Output() cerrarBorrarAl: EventEmitter<any> = new EventEmitter<any>();
  @Input() usuarios: Array<any> = new Array<any>();
  public alumnos: Array<any> = new Array<any>();
  public alumno:string;
  public form: FormGroup;

  constructor(private fireStore: AngularFirestore,private fb: FormBuilder) {
    this.form = this.fb.group({
      alumno:['',Validators.required],
    });
   }

  ngOnInit()
  {
    this.usuarios.forEach(usr=>
    {
      if(usr.perfil == "Alumno")
      {
        this.alumnos.push(usr);
      }
    })
  }

  borrar()
  {
      this.alumno=this.form.get('alumno').value;


      //grabo el alumno borrado y actualizo el empleado a usuario a inactivo para poder eliminarlo 
      
    this.fireStore.collection("alumnosBorrados").doc(this.alumno).set({
      email: this.alumno,
      perfil: "Alumno",
      fechaBorrado:Date.now.toString()
    }).catch(function(error)
    {
      alert("Error al registrarse");
    });


    this.cerrarBorrarAl.emit(false);
    }


}