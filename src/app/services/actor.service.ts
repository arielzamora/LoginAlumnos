import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, catchError, timeInterval } from 'rxjs/operators';
import { actor } from '../model/actor';

import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument}from '@angular/fire/firestore';
import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
  retorno:Observable<actor[]>;
  returnProactor:Promise<any> ;


  private actorColeccion:AngularFirestoreCollection<actor>;
  private actorDoc:AngularFirestoreDocument<actor>;
  private actors:Observable<actor[]>;
  private actor:Observable<actor>;

  constructor(private afs:AngularFirestore) { 

    this.actorColeccion=afs.collection<actor>('actores');
    this.actors=this.actorColeccion.valueChanges(); 

  }

  public Listar(): Observable<actor[]> {
    this.actorColeccion=this.afs.collection<actor>('actores');
    return this.actors=this.actorColeccion.snapshotChanges()
     .pipe(map(changes => {
       return changes.map(action => {
         const data = action.payload.doc.data() as actor;
         data.id = action.payload.doc.id; 
         return data;
       });
     }));
  }

  public Obteneractor(codigo:string):Observable<actor[]>{
    this.actorColeccion=this.afs.collection<actor>('actores',x=>x.where("codigo","==",codigo));
    return this.actors=this.actorColeccion.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as actor;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }


  public Registrar(actor:actor): Promise<any> {

    this.actorColeccion=this.afs.collection<actor>('actores');
    return new Promise((resolve, reject) => {

    this.actorColeccion.add(actor).then(result => {
      resolve(true);
      }).catch(err => {
        reject(false);
      });
    
    })
  }

  public Eliminar(actor: actor): Promise<Object> {
     
       return new Promise((resolve, reject) => {
       this.actorDoc=this.afs.doc<actor>('actores/'+actor.id);
        this.actorDoc.delete().then(result => {
         resolve(true);
         }).catch(err => {
           reject(false);
         });
       
     })
  }



  public CambiarEstado(actor: actor): Promise<any> {

      return new Promise((resolve, reject) => {
      this.actorDoc=this.afs.doc<actor>('actors/'+actor.id);
      
      this.actorDoc.update(actor).then(result => {
        resolve(true);
        }).catch(err => {
          reject(false);
        });
      
    })
  }

  
}
