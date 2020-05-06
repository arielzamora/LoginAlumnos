import { Component, OnInit } from '@angular/core';
import {PeliculaService } from './../../services/pelicula.service';

import { pelicula } from 'src/app/model/pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  public listaPeliculas: Array<any>;
  public nombre: string;
  public existe: boolean;
  public pelicula: pelicula;
  constructor(private peliculaService: PeliculaService) { }

  ngOnInit(){
    this.cargarLista();
  }

  public cargarLista() {
   
    if(!this.listaPeliculas){
      this.peliculaService.Listar().subscribe(
        data => {
          this.listaPeliculas = data;
         // this.dataFiltros=this.listaPeliculas;
        },
        error => {
          console.log(error);
        }
      );
    }

  }
  buscar()
  {
    this.listaPeliculas.forEach(peli=>
      {
        if(peli.nombre == this.nombre)
        {
          this.pelicula = peli;
          this.existe = true;
        }
      })

      if(this.existe != true)
      {
        alert("La pelicula no se encuentra en nuestra base de datos")
      }
  }


}
