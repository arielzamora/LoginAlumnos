import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-lista-examen',
  templateUrl: './lista-examen.component.html',
  styleUrls: ['./lista-examen.component.css']
})
export class ListaExamenComponent implements OnInit {
  public img:string;
  @Output() cerrarListaExamenes: EventEmitter<any> = new EventEmitter<any>();
  @Input() materias: Array<any> = new Array<any>();
  @Input() inscripciones: Array<any> = new Array<any>();
  @Input() profesor:string;
  public examenes: Array<any> = new Array<any>();

  constructor(private fireStore:AngularFirestore,public domSanitizer:DomSanitizer) { }

  ngOnInit()
  {
    
    

    let examenesBd = this.fireStore.collection("Examenes").valueChanges();

    examenesBd.forEach(item=>
      {   
        item.forEach(examen=>{
          this.examenes.push(examen);
        });
             
      });
  }
}