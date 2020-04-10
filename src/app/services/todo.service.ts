//import { HttpBase } from './http-base.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, catchError, timeInterval } from 'rxjs/operators';
import { Todo } from '../model/todo';


import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument}from '@angular/fire/firestore';
import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  retorno:Observable<Todo[]>;
  returnProtodo:Promise<any> ;


  private todoColeccion:AngularFirestoreCollection<Todo>;
  private todoDoc:AngularFirestoreDocument<Todo>;
  private todos:Observable<Todo[]>;
  private todo:Observable<Todo>;

  constructor(private afs:AngularFirestore) { 

    this.todoColeccion=afs.collection<Todo>('Todos');
    this.todos=this.todoColeccion.valueChanges(); 

  }

  public Listar(): Observable<Todo[]> {
    this.todoColeccion=this.afs.collection<Todo>('Todos');
    return this.todos=this.todoColeccion.snapshotChanges()
     .pipe(map(changes => {
       return changes.map(action => {
         const data = action.payload.doc.data() as Todo;
         data.id = action.payload.doc.id; 
         return data;
       });
     }));
  }

  public Obtenertodo(codigo:string):Observable<Todo[]>{
    this.todoColeccion=this.afs.collection<Todo>('Todos',x=>x.where("codigo","==",codigo));
    return this.todos=this.todoColeccion.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Todo;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  public filtrarPorEstado(estado:string):Observable<Todo[]>{
    this.todoColeccion=this.afs.collection<Todo>('Todos',x=>x.where("estado","==",estado));
    return this.todos=this.todoColeccion.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Todo;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  public filtrarPorId(idTodo:string):Observable<Todo[]>{
    this.todoColeccion=this.afs.collection<Todo>('Todos',x=>x.where("idTodo","==",idTodo));
    return this.todos=this.todoColeccion.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Todo;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  public Registrar(todo:Todo): Promise<any> {

    this.todoColeccion=this.afs.collection<Todo>('Todos');
    return new Promise((resolve, reject) => {

    this.todoColeccion.add(todo).then(result => {
      resolve(true);
      }).catch(err => {
        reject(false);
      });
    
    })
  }

  public Eliminar(todo: Todo): Promise<Object> {

      
       todo.estado="Eliminada";

       return new Promise((resolve, reject) => {
       this.todoDoc=this.afs.doc<Todo>('Todos/'+todo.id);
       
       this.todoDoc.update(todo).then(result => {
         resolve(true);
         }).catch(err => {
           reject(false);
         });
       
     })
  }



  public CambiarEstado(todo: Todo): Promise<any> {

      return new Promise((resolve, reject) => {
      this.todoDoc=this.afs.doc<Todo>('Todos/'+todo.id);
      
      this.todoDoc.update(todo).then(result => {
        resolve(true);
        }).catch(err => {
          reject(false);
        });
      
    })
  }

  
}
