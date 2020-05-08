import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paises-listado',
  templateUrl: './paises-listado.component.html',
  styleUrls: ['./paises-listado.component.css']
})
export class PaisesListadoComponent implements OnInit {

  pais:any={};
  public existe: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  public cargoPais(pais:any) {
   
    this.existe=true;
    this.pais=pais;
  
    }
}
