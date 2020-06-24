import { User } from '../../../Model/User';
import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './listaUsuarios.component.html',
  styleUrls: ['./listaUsuarios.component.scss']
})
export class ListaUsuarios implements OnInit {
  @Input() listaUsuarios: User[]; //llega una lista por input y se filtra 
  @Output() cerrarListaUsuario: EventEmitter<any> = new EventEmitter<any>();

  public usuariosFiltrados: Array<any>;
  public tipoUsuario: string = "admin";

  constructor() { 

  }

  ngOnInit() {
    this.ngOnChange(this.tipoUsuario);
  }
  ngOnChange(value:string)
  {

    this.usuariosFiltrados = new Array<any>();

    switch(value)
    {
      case 'admin':
        this.listaUsuarios.forEach(usuario => 
        {
          if(usuario.perfil == "Administrador")
          {
            this.usuariosFiltrados.push(usuario);
          }
        });
        break;
      case 'alumno':
          this.listaUsuarios.forEach(usuario => 
            {
              if(usuario.perfil == "Alumno")
              {
                this.usuariosFiltrados.push(usuario);
              }
            });
        break;
      case 'profesor':
          this.listaUsuarios.forEach(usuario => 
            {
              if(usuario.perfil == "Profesor")
              {
                this.usuariosFiltrados.push(usuario);
              }
            });
          break;
      case 'todos':

          this.usuariosFiltrados = this.listaUsuarios;
          break;
    }

  }
   

}
