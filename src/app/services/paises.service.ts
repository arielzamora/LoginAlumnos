import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MiHttpService } from '../services/mi-http.service';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private miHttp: MiHttpService) { }
  BuscarTodos() 
  {
    return this.miHttp.httpGetO('all');
  }
}

