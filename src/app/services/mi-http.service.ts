import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MiHttpService {

  constructor(public http: HttpClient) { }
  private url = 'https://restcountries.eu/rest/v2/';

  public httpGetO (metodo: string): Observable<any> 
  {
    return this.http.get( this.url + metodo )
      .pipe( res => res);
  }
}
