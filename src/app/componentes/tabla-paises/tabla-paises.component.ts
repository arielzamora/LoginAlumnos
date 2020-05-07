import { Component, OnInit } from '@angular/core';
import { PaisesService } from './../../services/paises.service';


@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  constructor(private paisesService: PaisesService)
  {

  }

  public paises = [];

  ngOnInit() 
  {
    this.paisesService.BuscarTodos().subscribe(element => this.paises = element);
  }

}
