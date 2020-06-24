import { Router } from '@angular/router';
import { AuthService } from './../../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/User';
import { ClienteService } from 'src/app/Services/cliente.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss']
})
export class NavegacionComponent implements OnInit {

  public nombre: string;
  public perfil: string;
  user: User;


  constructor(private clienteService:ClienteService,private authService: AuthService, private router: Router) {
   
  }

  ngOnInit() {
    this.getCurrentUser(); 
  }

  getCurrentUser()
  {
    localStorage.clear();

    let userId=firebase.auth().currentUser.uid;
                           
    this.clienteService.obtenerUser(userId).subscribe(user=>{
              if(user)
              {   
                if(!localStorage.getItem('usuario'))
                {
                  localStorage.setItem('usuario',JSON.stringify(user[0]));
                }                                     
                  this.nombre = user[0].nombre;
                  this.perfil =  user[0].perfil;
              }
            });
  }

  logout() {
    localStorage.clear();
    this.authService.logout();
    this.router.navigate(['/Login']); 
  }

}
