
import { Producto } from './../model/producto';

import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument}from '@angular/fire/firestore';
import {Observable}from 'rxjs/internal/Observable';
import {map}from 'rxjs/operators';
import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  retorno :Observable<Producto[]>;
  retornoPromesa:Promise<Object>;

  private ProductoColeccion:AngularFirestoreCollection<Producto>;
  private ProductoDoc:AngularFirestoreDocument<Producto>;
  private Productos:Observable<Producto[]>;

  constructor(private afs:AngularFirestore) { 
    this.ProductoColeccion=afs.collection<Producto>('Productos');
    this.Productos=this.ProductoColeccion.valueChanges();
  }



  public Listar(): Observable<Producto[]> {
    this.ProductoColeccion=this.afs.collection<Producto>('Productos');
   return this.Productos=this.ProductoColeccion.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Producto;
        data.id = action.payload.doc.id; //me pisa el id del user con el del documento
        return data;
      });
    }));
  }

  //tengo que dar de alta el usuario y el rol 
  public Registrar(Producto:Producto): Promise<Object> {
    this.ProductoColeccion=this.afs.collection<Producto>('Producto');
    return new Promise((resolve, reject) => {
    this.ProductoColeccion.add(Producto).then(result=>{       
      resolve(true);
      }).catch(err => {
        reject(false);
      });
          
    })
    
  }

  //despues de insertado ,obtengo el Producto para pguardar su id de documento al id de Producto
  obtenerProducto(idUser: string): Observable<Producto[]>{
 
    this.ProductoColeccion=this.afs.collection<Producto>('Productos',x=>x.where("idUser","==",idUser));
     return this.Productos=this.ProductoColeccion.snapshotChanges()
     .pipe(map(changes => {
       return changes.map(action => {
         const data = action.payload.doc.data() as Producto;
          data.id = action.payload.doc.id; 
         // data.idUser=idUser;
         return data;
       });
     }));

   }
   
  public Modificar(Producto:Producto): Promise<Object> {
 
    //MODIFICO Producto       
    let idProducto=Producto.id;

    return new Promise((resolve, reject) => {
    this.ProductoDoc=this.afs.doc<Producto>('Productos/'+idProducto);
    
    this.ProductoDoc.update(Producto).then(result => {
      resolve(true);
      }).catch(err => {
        reject(false);
      });
    
  })

  }

  public Baja(Producto: Producto): Promise<Object>{

    let idProducto=Producto.id;

    return new Promise((resolve, reject) => {

    this.ProductoDoc=this.afs.doc<Producto>('Productos/'+idProducto);
      
    this.ProductoDoc.update(Producto).then(resolved=>{
      resolve(true);
    }).catch(err=>{
      reject(false);
    });

    })

    }
}
