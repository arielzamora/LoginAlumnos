import { ClienteService } from './Services/cliente.service';
import { AppRoutingModule } from './Routes/app-routing.module';
import { NgxSpinnerService, NgxSpinnerModule } from 'ngx-spinner';
import { HttpBase } from './Services/http-base.service';
import { SpinnerInterceptor } from './Services/Interceptors/SpinnerInterceptor';
import { ErrorInterceptor } from './Services/Interceptors/ErrorInterceptor';
import { JwtInterceptor } from './Services/Interceptors/JWTInterceptor';
import { DomSanitizer, BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PanelDirective } from './Directives/panel.directive';
import { NavegacionComponent } from './Components/navegacion/navegacion.component';
import { PrincipalComponent } from './Components/principal/principal.component';
import { ValidarRolesDirective } from './Directives/validar-roles.directive';
import { NgxCaptchaModule } from 'ngx-captcha';
import { DolarPipe } from './Pipes/dolar.pipe';
import { EspacioPipe } from './Pipes/espacio.pipe';
import { DateFirePipe } from './Pipes/dateFire.pipe';
import { SexoDirective } from './Directives/sexo.directive';
import { AumentoPipe } from './Pipes/aumento.pipe';


import { MateriaService } from './Services/materia.service';


//angular fire 
//import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
//import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

//firestore y imagenes 
import {AngularFireModule}from '@angular/fire';
import {AngularFireDatabaseModule}from '@angular/fire/database';
import {AngularFireAuth}from '@angular/fire/auth';
import {AngularFireStorageModule}from '@angular/fire/storage';
import {AngularFirestore}from '@angular/fire/firestore';
import {FormsModule}from '@angular/forms';

import { firebaseConfig } from 'src/environments/environment';
import { AlumnoHomeComponent } from './Components/alumno-home/alumno-home.component';
import { ProfesorHomeComponent } from './Components/profesor-home/profesor-home.component';
import { MateriaHomeComponent } from './Components/materia-home/materia-home.component';

import {ListaMaterias } from './Components/materia-home/lista/listaMaterias.component';
import {ListaUsuarios } from './Components/materia-home/listaUsuarios/listaUsuarios.component';
import {RegistroMateria}from './Components/materia-home/registro/registroMateria.component';
import { RegistroAlumnoComponent } from './Components/alumno-home/registro-alumno/registro-alumno.component';
import { ListaAlumnoComponent } from './Components/alumno-home/lista-alumno/lista-alumno.component';
import { MateriaNotaComponent } from './Components/alumno-home/materia-nota/materia-nota.component';
import { ProfesorMateriaComponent } from './Components/profesor-home/profesor-materia/profesor-materia.component';
import{ AlumnoMateriaComponent } from './Components/profesor-home/alumno-materia/alumno-materia.component';
import { HayCupoPipe } from './Pipes/hay-cupo.pipe';
import { CambioColorDirective } from './Directives/cambio-color.directive';
import { DetalleMateriaComponent } from './Components/materia-home/detalle-materia/detalle-materia.component';
import { BorrarAlumnoComponent } from './Components/alumno-home/borrar-alumno/borrar-alumno.component';
import { MateriasAcargoComponent } from './Components/materia-home/materias-acargo/materias-acargo.component';
import { ListaBorradosComponent } from './Components/alumno-home/lista-borrados/lista-borrados.component';
import { AdminHomeComponent } from './Components/admin-home/admin-home.component';
import { ExamenHomeComponent } from './Components/examen-home/examen-home.component';
import { RegistroExamenComponent } from './Components/examen-home/registro-examen/registro-examen.component';
import { ListaExamenComponent } from './Components/examen-home/lista-examen/lista-examen.component';
import { RegistroComponent } from './Components/login/registro/registro.component';

export function getAccessToken() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PanelDirective,
    NavegacionComponent,
    PrincipalComponent,
    ValidarRolesDirective,
    ListaMaterias,
    ListaUsuarios,
    RegistroMateria,
    DolarPipe,
    EspacioPipe,
    SexoDirective,
    AumentoPipe,
    DateFirePipe,
    AlumnoHomeComponent,
    ProfesorHomeComponent,
    MateriaHomeComponent,
    RegistroAlumnoComponent,
    ListaAlumnoComponent,
    ProfesorMateriaComponent,
    AlumnoMateriaComponent,
    HayCupoPipe,
    CambioColorDirective,
    MateriaNotaComponent,
    DetalleMateriaComponent,
    BorrarAlumnoComponent,
    MateriasAcargoComponent,
    ListaBorradosComponent,
    AdminHomeComponent,
    ExamenHomeComponent,
    RegistroExamenComponent,
    ListaExamenComponent,
    RegistroComponent
    ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxSpinnerModule,
    HttpClientModule,
    NgxCaptchaModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [
    HttpBase,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    NgxSpinnerService,
    ClienteService,
    MateriaService,
    AngularFireAuth,//
    AngularFirestore//
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
