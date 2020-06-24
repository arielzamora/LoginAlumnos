import { Injectable } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from './../Model/User';
import {ClienteService}from './cliente.service';

//angular export 
import {AngularFireAuth} from '@angular/fire/auth';
import { map }from 'rxjs/operators';
import {auth}from 'firebase/app';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // store the URL so we can redirect after logging in
  redirectUrl: string;
  


  //npm install firebase @angular/fire --save
  //npm install --save @ng-bootstrap/ng-bootstrap
  //npm install jquery --save
  //npm install ngx-spinner --save
  //npm install --save font-awesome angular-font-awesome
  //npm install --save-dev @fortawesome/fontawesome-free
  //npm install --save ng-captcha
  //npm install ngx-captcha

  constructor(private clienteService:ClienteService, private AFauth :AngularFireAuth ,private afs:AngularFirestore,private router :Router) {

  }


register(mail: string, nombre: string, clave: string, perfil: string)
{

  return new Promise((resolve,rejected)=>{
    
    this.AFauth.auth.createUserWithEmailAndPassword(mail,clave).then(us => {           
    resolve(true);
    }).catch(err => rejected(err));   
  });


}

loguear(mail: string,clave: string){

  return new Promise((resolve,rejected)=>{
  this.AFauth.auth.signInWithEmailAndPassword(mail,clave).then(user => { 
    resolve(user); 
  }).catch(err => rejected(err))
  });
   
}        

logout()
{
localStorage.removeItem('usuario');
this.AFauth.auth.signOut().then(()=> {
  this.router.navigate(['/Login']);
})
}

//desde aca mi codigo 4
registerUser(email: string, pass: string){
  return new Promise((resolve,reject) => { //doy de alta mail y pasword 
    this.AFauth.auth.createUserWithEmailAndPassword(email,pass)
    .then(userData =>{//despues doy de alta el empleado 
       resolve(userData)
      // this.updateUserDataEmpleado(userData.user,role) //tenemos que enviarle el rol que se selecciona 
      }).catch(err=>{
        reject(err)
      });
  })
}

loginEmailUser(email: string, pass: string){
  return new Promise((resolve,reject) => {
    this.AFauth.auth.signInWithEmailAndPassword(email,pass)
    .then( userData => resolve(userData),
    err => reject (err));
  })
}



logoutUser(){
 return this.AFauth.auth.signOut();
}

isAuth()
{
  return this.AFauth.authState.pipe(map(auth=>auth));
}

isUserComanda(userUid){
 /*  const userRef:AngularFirestoreDocument<Empleado>= this.afs.doc('Empleado/'+userUid);
  return userRef.valueChanges();
*/
}

}
