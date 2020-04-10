import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{TodoHomeComponent}from './../componentes/todo-home/todo-home.component';
import{TodoListComponent}from './../componentes/todo-home/todo-list/todo-list.component';
import{LoginComponent}from './../componentes/login/login.component';
import{HomeComponent}from './../componentes/home/home.component';
import { AuthGuard } from '../common/auth.guard';
import { CommonModule } from '@angular/common';


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
