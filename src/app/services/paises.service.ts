import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MiHttpService } from '../services/mi-http.service';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  paises:Observable<any>;
  public paisesInicial = [];
  public paisesFinal = [];
  constructor(private miHttp: MiHttpService) { }
  BuscarTodos() 
  {
    this.paises=this.miHttp.httpGetO('all');
    return this.paises;
  }
  EliminarPais(pais:any) 
  {
   
    this.paises.subscribe(element => this.paisesInicial = element);
    this.paisesInicial.forEach(element => {
      if(element!=pais){
        this.paisesFinal.push(element);
      }
    });

  }
}

