import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{TodoHomeComponent}from './../componentes/todo-home/todo-home.component';
import{LoginComponent}from './../componentes/login/login.component';
import{HomeComponent}from './../componentes/home/home.component';
import { AuthGuard } from '../common/auth.guard';
import { CommonModule } from '@angular/common';

import{ActorHomeComponent}from './../componentes/actor-home/actor-home.component';
import{PeliculasHomeComponent}from './../componentes/peliculas-home/peliculas-home.component';
import{BusquedaComponent}from './../componentes/busqueda/busqueda.component';
import{PeliculaAltaComponent}from './../componentes/peliculas-home/pelicula-alta/pelicula-alta.component';


const routes: Routes = [
  {
    path: 'Login', component: LoginComponent
  },
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Administrador']},
    children: [
      {
        path: 'Listado',
        component: TodoHomeComponent,
        canActivate: [AuthGuard],
        data: { roles: ['Administrador'] }
      },
     {
        path: 'Peliculas',
        component: PeliculasHomeComponent,
        canActivate: [AuthGuard],
        data: { roles: ['Administrador'] }
      } ,
      {
        path: 'Busqueda',
        component: BusquedaComponent,
        canActivate: [AuthGuard],
        data: { roles: ['Administrador'] }
      } ,
       {
        path: 'Actores',
        component: ActorHomeComponent,
        canActivate: [AuthGuard],
        data: { roles: ['Administrador'] }
      },
      {
       path: 'PelicualAlta',
       component: PeliculaAltaComponent,
       canActivate: [AuthGuard],
       data: { roles: ['Administrador'] }
     }
    ]
  },
 
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [ RouterModule ],
  declarations: [
  ]
})
export class AppRoutingModule { }
