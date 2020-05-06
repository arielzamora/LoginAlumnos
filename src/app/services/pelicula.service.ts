import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, catchError, timeInterval } from 'rxjs/operators';
import { pelicula } from '../model/pelicula';

import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument}from '@angular/fire/firestore';
import { firestore } from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  retorno:Observable<pelicula[]>;
  returnPropelicula:Promise<any> ;


  private peliculaColeccion:AngularFirestoreCollection<pelicula>;
  private peliculaDoc:AngularFirestoreDocument<pelicula>;
  private peliculas:Observable<pelicula[]>;
  private pelicula:Observable<pelicula>;

  constructor(private afs:AngularFirestore) { 

    this.peliculaColeccion=afs.collection<pelicula>('peliculas');
    this.peliculas=this.peliculaColeccion.valueChanges(); 

  }

  public Listar(): Observable<pelicula[]> {
    this.peliculaColeccion=this.afs.collection<pelicula>('peliculas');
    return this.peliculas=this.peliculaColeccion.snapshotChanges()
     .pipe(map(changes => {
       return changes.map(action => {
         const data = action.payload.doc.data() as pelicula;
         data.id = action.payload.doc.id; 
         return data;
       });
     }));
  }

  public Obtenerpelicula(codigo:string):Observable<pelicula[]>{
    this.peliculaColeccion=this.afs.collection<pelicula>('peliculas',x=>x.where("codigo","==",codigo));
    return this.peliculas=this.peliculaColeccion.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as pelicula;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }


  public Registrar(pelicula:pelicula): Promise<any> {

    this.peliculaColeccion=this.afs.collection<pelicula>('peliculas');
    return new Promise((resolve, reject) => {

    this.peliculaColeccion.add(pelicula).then(result => {
      resolve(true);
      }).catch(err => {
        reject(false);
      });
    
    })
  }

  public Eliminar(pelicula: pelicula): Promise<Object> {
       return new Promise((resolve, reject) => {
       this.peliculaDoc=this.afs.doc<pelicula>('peliculas/'+pelicula.id); 
       this.peliculaDoc.delete().then(result => {
         resolve(true);
         }).catch(err => {
           reject(false);
         });
       
     })
  }



  public CambiarEstado(pelicula: pelicula): Promise<any> {

      return new Promise((resolve, reject) => {
      this.peliculaDoc=this.afs.doc<pelicula>('peliculas/'+pelicula.id);
      
      this.peliculaDoc.update(pelicula).then(result => {
        resolve(true);
        }).catch(err => {
          reject(false);
        });
      
    })
  }

  
}
