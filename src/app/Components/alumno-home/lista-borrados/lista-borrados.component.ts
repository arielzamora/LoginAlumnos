import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-lista-borrados',
  templateUrl: './lista-borrados.component.html',
  styleUrls: ['./lista-borrados.component.css']
})
export class ListaBorradosComponent implements OnInit {

  @Output() cerrarListaBorrados: EventEmitter<any> = new EventEmitter<any>();
  public alumnosBorrados = new Array<any>();
  constructor(private fireStore:AngularFirestore) { }

  ngOnInit() {
    let alumnosEliminados = this.fireStore.collection("alumnosBorrados").valueChanges();

    alumnosEliminados.forEach(ins=>
      {
        ins.forEach(item=>
          {
            this.alumnosBorrados.push(item);
          })
      });
  }

}
