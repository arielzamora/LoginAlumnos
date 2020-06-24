import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';

import {AngularFireAuth} from '@angular/fire/auth';
import {auth}from 'firebase/app';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';
import {Materia } from '../Model/Materia';


@Injectable({
  providedIn: 'root'
})
export class MateriaService {


  private materiaColeccion:AngularFirestoreCollection<Materia>;
  private materiaDoc:AngularFirestoreDocument<Materia>;
  private materias:Observable<Materia[]>;
  private materia:Observable<Materia>;

  constructor(private afs:AngularFirestore) {
    this.materiaColeccion=afs.collection<Materia>('Materias');
    this.materias=this.materiaColeccion.valueChanges();
  }


  // public ListarPorCliente(idCliente: number): Observable<Materia[]> {
  //   return this.Listar().pipe(
  //     map(response => {
  //       return response.filter( element => {
  //         console.log(idCliente);
  //         console.log(element.idCliente);
  //         return element.idCliente === idCliente;
  //       });
  //     }));
  // }



  public Listar(): Observable<Materia[]> {
    this.materiaColeccion=this.afs.collection<Materia>('Materias');
   return this.materias=this.materiaColeccion.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Materia;
        data.id = action.payload.doc.id; //me pisa el id del Materia con el del documento
        return data;
      });
    }));
  }

  public ListarInscripciones(): Observable<Materia[]> {
    this.materiaColeccion=this.afs.collection<Materia>('Inscripciones');
   return this.materias=this.materiaColeccion.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Materia;
        data.id = action.payload.doc.id; //me pisa el id del Materia con el del documento
        return data;
      });
    }));
  }

  public ListarPorId(): Observable<Materia[]> {
    this.materiaColeccion=this.afs.collection<Materia>('Materias');
   return this.materias=this.materiaColeccion.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as Materia;
        data.id = action.payload.doc.id; //me pisa el id del Materia con el del documento
        return data;
      });
    }));
  }


  //codigo: number, local: number, nombre: string, precio: number, genero: string, fechaIngreso: Date, imagen
public Registrar(materiaObj:Materia): Promise<Object> {

  const Materia: Materia = {
    nombre: materiaObj.nombre,
    cuatrimestre: materiaObj.cuatrimestre,
    cupo: materiaObj.cupo,
    profesor: materiaObj.profesor,
    imagen:materiaObj.imagen

  };

  this.materiaColeccion=this.afs.collection<Materia>('Materias');
  return new Promise((resolve, reject) => {

  this.materiaColeccion.add(Materia).then(result=>{       
    resolve(true);
    }).catch(err => {
      reject(false);
    });
        
  })
  
}


  public Modificar(materiaObj:Materia): Promise<Object> {
 
    const Materia: Materia = {
      id:materiaObj.id,
      nombre: materiaObj.nombre,
      cuatrimestre: materiaObj.cuatrimestre,
      cupo: materiaObj.cupo,
      profesor: materiaObj.profesor,
  
    };
    return new Promise((resolve, reject) => {
    this.materiaDoc=this.afs.doc<Materia>('Materias/'+materiaObj.id);
       
    this.materiaDoc.update(Materia).then(result => {
      resolve(true);
      }).catch(err => {
        reject(false);
      });
  })

  }


public Baja(materiaObj: Materia): Promise<Object>{

  const Materia: Materia = {
    id:materiaObj.id,
    nombre: materiaObj.nombre,
    cuatrimestre: materiaObj.cuatrimestre,
    cupo: materiaObj.cupo,
    profesor: materiaObj.profesor,

  };


  return new Promise((resolve, reject) => {

  this.materiaDoc=this.afs.doc<Materia>('Materias/'+materiaObj.id);
    
  this.materiaDoc.update(Materia).then(resolved=>{
    resolve(true);
  }).catch(err=>{
    reject(false);
  });

  })

  }

//despues de insertado ,obtengo el Materia para pguardar su id de documento al id de Materia
obtenerMateria(idMateria: string): Observable<Materia[]>{

  this.materiaColeccion=this.afs.collection<Materia>('Materias',x=>x.where("idMateria","==",idMateria));
   return this.materias=this.materiaColeccion.snapshotChanges()
   .pipe(map(changes => {
     return changes.map(action => {
       const data = action.payload.doc.data() as Materia;
        data.id = action.payload.doc.id; 
       return data;
     });
   }));

 }


//despues de insertado ,obtengo el Materia para pguardar su id de documento al id de Materia
obtenerMateriaAlumno(idMateria: string): Observable<Materia[]>{

  this.materiaColeccion=this.afs.collection<Materia>('Materias',x=>x.where("idMateria","==",idMateria));
   return this.materias=this.materiaColeccion.snapshotChanges()
   .pipe(map(changes => {
     return changes.map(action => {
       const data = action.payload.doc.data() as Materia;
        data.id = action.payload.doc.id; 
       return data;
     });
   }));

 }

   //codigo: number, local: number, nombre: string, precio: number, genero: string, fechaIngreso: Date, imagen
public RegistrarMateriaAlumno(nombre:string,materiaId:string): Promise<Object> {

  const materiasAlumno: object = {
    nombre: nombre,
    idMateria:materiaId

  };

  this.materiaColeccion=this.afs.collection<Materia>('MateriaAlumnos');
  return new Promise((resolve, reject) => {

  this.materiaColeccion.add(materiasAlumno).then(result=>{       
    resolve(true);
    }).catch(err => {
      reject(false);
    });
        
  })
  
}



}
