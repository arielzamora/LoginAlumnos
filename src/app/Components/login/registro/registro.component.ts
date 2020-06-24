import { Router } from '@angular/router';
import { AuthService } from './../../../Services/auth.service';
import { ClienteService } from './../../../Services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {User}from '../../../Model/User';
import * as firebase from 'firebase';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  public form: FormGroup;
  public error: boolean;
  public errorMessage: string;
  public redirectUrl: string;
  public mail: string;
  public pass: string;
  public name: string;
  public perfil: string;

  constructor(private fb: FormBuilder,private clienteService:ClienteService, private authService: AuthService, private router: Router) {
    this.form = this.fb.group({
      user: ['', Validators.required],
      name: ['', Validators.required],
      pass: ['', Validators.required],
      perfil: ['Cliente', Validators.required]
    });
  }

  ngOnInit() {

  }

  

  public Registrar(): void {
    this.errorMessage = '';
    this.error = false;
    if (this.form.valid) {
      this.mail = this.form.get('user').value;
      this.pass = this.form.get('pass').value;
      this.name = this.form.get('name').value;
      this.perfil = this.form.get('perfil').value;

      this.authService.register(this.mail, this.name, this.pass, this.perfil)
        .then(response => {
          if(response){
            this.registrarUsuario();
          }           
          }
        )
        .catch(
          response => {
            this.error = true;
            this.errorMessage = response.message;
          }
        );
    } else {
      this.errorMessage = 'Debe completar los campos correctamente.';
      this.error = true;
    }
  }

  public registrarUsuario(){

    let userId=firebase.auth().currentUser.uid;
                          
    this.registroCliente(userId);  

  } 

  public registroCliente(userId:string){
    if(userId){
      let usuarioP: User = {
        mail: this.mail,
        idUser:userId,
        nombre: this.name,
        clave: this.pass,
        perfil: this.perfil,
        sexo:'N/A',
        estado:'Activo'
      };  
   
    this.clienteService.Registrar(usuarioP).then(response=>{
      if (response) {
        localStorage.clear();
        this.form.reset();
        //guardamos el usuario en el local storage
        localStorage.setItem('usuario',JSON.stringify(usuarioP));   
        
        if (!this.redirectUrl) {
          this.redirectUrl = '/';
        }
        this.router.navigate(['/Principal']);                     
      }
    }).catch(err=>{
       this.errorMessage = 'Debe completar los campos correctamente.';
      });
    }
  }






}
