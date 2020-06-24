import { Router } from '@angular/router';
import { AuthService } from './../../Services/auth.service';
import { ClienteService } from './../../Services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {User}from '../../Model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formG: FormGroup;
  public error: boolean;
  public errorMessage: string;
  public redirectUrl: string;
  public mail: string;
  public pass: string;
  public name: string;
  public perfil: string;

  constructor(private fb: FormBuilder,private clienteService:ClienteService, private authService: AuthService, private router: Router) {
    this.formG = this.fb.group({
      user: ['', Validators.required],
      pass: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.router.navigate(['/']);
  }

  CargarDefault(tipo: string) {
    let dataLogin: Object = null;
    switch (tipo) {
      case 'F':
        dataLogin = {
          user: 'alumno@parcial.com',
          pass: '123456'
        };
        this.formG.setValue(dataLogin);
        break;
      case 'N':
        dataLogin = {
          user: 'profesor@gmail.com',
          pass: '123456'
        };
        this.formG.setValue(dataLogin);
        break;
      case 'P':
        dataLogin = {
          user: 'admin@parcial.com',
          pass: '123456'
        };
        this.formG.setValue(dataLogin);
        break;
    }
  }

  public Submit(): void {
    this.errorMessage = '';
    this.error = false;
    if (this.formG.valid) {
      localStorage.clear();
      const mail: string = this.formG.get('user').value;
      const pass: string = this.formG.get('pass').value;


      this.authService.loguear(mail, pass)
        .then(response => {
          if(response){
            this.router.navigate(['/Principal']);
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

}
