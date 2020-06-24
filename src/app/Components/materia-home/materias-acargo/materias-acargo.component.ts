import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder,FormGroup ,Validators} from '@angular/forms';
import { Materia } from 'src/app/Model/Materia';

@Component({
  selector: 'app-materias-acargo',
  templateUrl: './materias-acargo.component.html',
  styleUrls: ['./materias-acargo.component.css']
})
export class MateriasAcargoComponent implements OnInit {

  public verMaterias:boolean;
  @Input() listaMaterias: Array<any> = new Array<any>();
  @Input() inscripciones: Array<any> = new Array<any>();
  @Input() listaUsuarios: Array<any> = new Array<any>();
  @Output() cerrarListaMateria: EventEmitter<any> = new EventEmitter<any>();
  public materiasP: Array<any>;
  public inscripcionP:Array<any>;
  public usuariosP:Array<any>;
  public errorMessage: string;
  public error: boolean;
  public success: boolean;


  public profesor:string;
  public form: FormGroup;
  public mostrarDetalleMateria:boolean;
  public materiaSeleccionada :Materia;


  constructor(private fb: FormBuilder,private fireStore: AngularFirestore){ 
   
    this.materiasP = new Array<any>();
    this.inscripcionP=new Array<any>();
    this.usuariosP=new Array<any>();



    this.form = this.fb.group({
      profesor:['',Validators.required],
    });
  }

  ngOnInit() {

    this.inscripcionP=this.inscripciones;
    this.usuariosP=this.listaUsuarios;
  }

  verMateriasCargo()
  {
      this.verMaterias=true;

      this.profesor=this.form.get('profesor').value;
       
      this.listaMaterias.forEach(mat =>
        {
          if(mat.profesor == this.profesor)
          {
            this.materiasP.push(mat);
          }
        });
  }

  mostrarDetalle(materia:Materia)
  {
    this.materiaSeleccionada=materia;
    this.mostrarDetalleMateria=true;
  }

}
