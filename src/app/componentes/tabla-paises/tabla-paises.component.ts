import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { PaisesService } from './../../services/paises.service';


@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  pais:any={};
  @Output() devuelvoPais: EventEmitter<any>;
  constructor(private paisesService: PaisesService)
  {
    this.devuelvoPais = new EventEmitter<any>();
  }

  public paisesInicial = [];
  public paisesFinal = [];

  ngOnInit() 
  {

      this.paisesService.BuscarTodos().subscribe(element => this.paisesInicial = element);
 
  }

  verDetallePais(pais:any)
  {
    this.pais=pais;
    this.devuelvoPais.emit(pais);
    
  }
    darDeBaja(pais:any){
      this.pais=pais;
      this.paisesFinal=new Array<any>();

      this.paisesInicial.forEach(pai=>{
        if(pai!=pais){
          this.paisesFinal.push(pai);
        }
      });
      this.paisesInicial =this.paisesFinal;

    }


}
