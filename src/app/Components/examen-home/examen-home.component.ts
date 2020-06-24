import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-examen-home',
  templateUrl: './examen-home.component.html',
  styleUrls: ['./examen-home.component.css']
})
export class ExamenHomeComponent implements OnInit {

  public materias: Array<any>;
  public materiasAcargo: Array<any>;
  public inscripciones: Array<any>;
  public inscripcionesAlumnos: Array<any>;
  public verExamenes:boolean = false;
  public inscripcionExamenes:boolean = false;
  public profesor:string;

  constructor(private fireStore: AngularFirestore)
  {
    this.materias = new Array<any>();
    this.inscripciones = new Array<any>();

       //devuelvo profesor,materias a cargo y alumnos inscriptos en su materia 
       this.obtengoProfesor();
       this.obtengoMaterias();
       this.obtengoAlumnos();

  }

  ngOnInit()
  {

    
  }

  obtengoMaterias()
  {
    let materias = this.fireStore.collection("Materias").valueChanges();

      materias.forEach(mat=>
        {
          mat.forEach(item=>{
            
            this.materias.push(item); 
          })
                  
        });
         //devuelvo las materias filtradas por el profesor
     /*    this.materias.forEach(mat=>
          {
            if(mat.profesor == this.profesor)
            {
              this.materiasAcargo.push(mat);
            }  
          }); */
  } 

  obtengoAlumnos()
  {
    let inscripciones = this.fireStore.collection("Inscripciones").valueChanges();

    inscripciones.forEach(ins=>  //filtro por profesor y materia inscripcion.nombre=materia
      {
        ins.forEach(item=>
          {
            this.inscripciones.push(item);
          })
      });

      //solo de la lista filtrada obtengo los alumnos 
   /*    this.materiasAcargo.forEach(mat=>
        {
          this.inscripciones.forEach(inscrip=>
            {
               if(inscrip.nombre==mat.materia)
               {
                 this.inscripcionesAlumnos.push(inscrip);//cargo solo los alumnos de las materias
               }
            });
        }); */
      
  }


  obtengoProfesor()
  {
    const user=JSON.parse(localStorage.getItem('usuario'));

    if(user){
      this.profesor=user.nombre;
    }

  }

    
}