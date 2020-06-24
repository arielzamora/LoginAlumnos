import { PrincipalComponent } from './../Components/principal/principal.component';
import { LoginComponent } from './../Components/login/login.component';
import { RegistroComponent } from './../Components/login/registro/registro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../Common/auth.guard';
import{AlumnoHomeComponent}from './../Components/alumno-home/alumno-home.component';
import{MateriaHomeComponent}from './../Components/materia-home/materia-home.component';
import{ProfesorHomeComponent}from './../Components/profesor-home/profesor-home.component';
import{AdminHomeComponent}from './../Components/admin-home/admin-home.component';
import{ExamenHomeComponent}from './../Components/examen-home/examen-home.component';

const routes: Routes = [
  {
    path: 'Login', component: LoginComponent
  },
  {
    path: 'Registro', component: RegistroComponent
  },
  { path: '', redirectTo: 'Principal', pathMatch: 'full' },
  { path: 'Principal', component: PrincipalComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Alumno', 'Profesor', 'Administrador']},
    children: [
      {
        path: 'Alumnos',
        component: AlumnoHomeComponent,
        canActivate: [AuthGuard],
        data: { roles: ['Alumno', 'Profesor', 'Administrador'] }
      },
      {
        path: 'Profesores',
        component: ProfesorHomeComponent,
        canActivate: [AuthGuard],
        data: { roles: ['Profesor'] }
      },
      {
        path: 'Examenes',
        component: ExamenHomeComponent,
        canActivate: [AuthGuard],
        data: { roles: ['Profesor'] }
      },
      {
        path: 'Materias',
        component: MateriaHomeComponent,
        canActivate: [AuthGuard],
        data: { roles: ['Administrador'] }
      },
      {
        path: 'Administrador',
        component: AdminHomeComponent,
        canActivate: [AuthGuard],
        data: { roles: ['Administrador'] }
      },
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
