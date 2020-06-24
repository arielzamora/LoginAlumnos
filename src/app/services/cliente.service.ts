import { Observable } from 'rxjs';
import { User } from './../Model/User';
import { Injectable } from '@angular/core';

import {AngularFireAuth} from '@angular/fire/auth';
import { map }from 'rxjs/operators';
import {auth}from 'firebase/app';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  private userColeccion:AngularFirestoreCollection<User>;
  private userDoc:AngularFirestoreDocument<User>;
  private users:Observable<User[]>;
  private user:Observable<User>;

  constructor(private afs:AngularFirestore) {
    this.userColeccion=afs.collection<User>('usuarios');
    this.users=this.userColeccion.valueChanges();
  }

  public Listar(): Observable<User[]> {
    this.userColeccion=this.afs.collection<User>('usuarios');
   return this.users=this.userColeccion.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as User;
        data.id = action.payload.doc.id; //me pisa el id del user con el del documento
        return data;
      });
    }));
  }

  public ListarPorId(): Observable<User[]> {
    this.userColeccion=this.afs.collection<User>('usuarios');
   return this.users=this.userColeccion.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as User;
        data.id = action.payload.doc.id; //me pisa el id del user con el del documento
        return data;
      });
    }));
  }


/*   registeruser(email: string, pass: string){
    return new Promise((resolve,reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email,pass)
      .then( userData => resolve(userData),
      err => reject (err));
    })
  } */
  //tengo que dar de alta el usuario para el logue con firebase y despues el usuario base
public Registrar(userObj:User): Promise<Object> {

  const user: User = {
    mail: userObj.mail,
    idUser:userObj.idUser,
    clave: userObj.clave,
    nombre: userObj.nombre,
    perfil: userObj.perfil,
    sexo: userObj.sexo,
    estado:userObj.estado
  };

  this.userColeccion=this.afs.collection<User>('usuarios');
  return new Promise((resolve, reject) => {

  this.userColeccion.add(user).then(result=>{       
    resolve(true);
    }).catch(err => {
      reject(false);
    });
        
  })
  
}

  public Modificar(userObj:User): Promise<Object> {
 
    //MODIFICO EMPLEADO       
    const user: User = {
      id:userObj.id,
      mail: userObj.mail,
      clave: userObj.clave,
      nombre: userObj.nombre,
      perfil: userObj.perfil,
      sexo: userObj.sexo
    };

    return new Promise((resolve, reject) => {
    this.userDoc=this.afs.doc<User>('User/'+userObj.id);
       
    this.userDoc.update(user).then(result => {
      resolve(true);
      }).catch(err => {
        reject(false);
      });
  })

  }


public Baja(userOb: User): Promise<Object>{

  const user: User = {
    id:userOb.id,
    mail: userOb.mail,
    clave: userOb.clave,
    nombre: userOb.nombre,
    perfil: userOb.perfil,
    sexo: userOb.sexo
  };


  return new Promise((resolve, reject) => {

  this.userDoc=this.afs.doc<User>('User/'+userOb.id);
    
  this.userDoc.update(user).then(resolved=>{
    resolve(true);
  }).catch(err=>{
    reject(false);
  });

  })

  }

//despues de insertado ,obtengo el user para pguardar su id de documento al id de user
obtenerUser(idUser: string): Observable<User[]>{

  this.userColeccion=this.afs.collection<User>('usuarios',x=>x.where("idUser","==",idUser));
   return this.users=this.userColeccion.snapshotChanges()
   .pipe(map(changes => {
     return changes.map(action => {
       const data = action.payload.doc.data() as User;
        data.id = action.payload.doc.id; 
       return data;
     });
   }));

 }
 
}