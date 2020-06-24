import { User } from './../Model/User';
import { Injectable, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import {AngularFireAuth} from '@angular/fire/auth';
import {auth}from 'firebase/app';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class EstadisticaService {

/* 
  private zapatoColeccion:AngularFirestoreCollection<Zapato>;
  private zapatoDoc:AngularFirestoreDocument<Zapato>;
  private zapatos:Observable<Zapato[]>;
  private zapato:Observable<Zapato>; */

  constructor() { }

 /*  public ZapatosPorLocal(local): Promise<Zapato[]> {
    return this.zapatoService.Listar().toPromise().then(response => {
      if (local != 'Todos') {
        response = response.filter(zapato => {
          return zapato.local == local;
        });
      }
      return response;
    });
  }

  public ZapatosRepetidos(opcion): Promise<Zapato[]> {
    return this.zapatoService.Listar().toPromise().then(response => {
      response.forEach(zapato => {
        zapato.repetido = false;
        response.forEach(z => {
          if (z.id != zapato.id && z.codigo == zapato.codigo) {
            zapato.repetido = true;
          }
        })
      });

      if (opcion == 'NoRepetidos') {
        response = response.filter(zapato => {
          return !zapato.repetido;
        });
      }
      else if (opcion == 'Repetidos'){
        response = response.filter(zapato => {
          return zapato.repetido;
        });
      }
      return response;
    });
  } */

}
