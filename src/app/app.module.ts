import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgxCaptchaModule } from 'ngx-captcha';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


//angular fire 

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

//firestore y imagenes 
import {AngularFireModule}from '@angular/fire';
import {AngularFireDatabaseModule}from '@angular/fire/database';
import {AngularFireAuth}from '@angular/fire/auth';
import {AngularFireStorageModule}from '@angular/fire/storage';
import {AngularFirestore}from '@angular/fire/firestore';
import {FormsModule,ReactiveFormsModule}from '@angular/forms';

import { firebaseConfig } from 'src/environments/environment';


import { NgxSpinnerService, NgxSpinnerModule } from 'ngx-spinner';
//import { SpinnerInterceptor } from './Services/Interceptors/SpinnerInterceptor';
//import { ErrorInterceptor } from './Services/Interceptors/ErrorInterceptor';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { TodoHomeComponent } from './componentes/todo-home/todo-home.component';
import { TodoEditComponent } from './componentes/todo-home/todo-edit/todo-edit.component';
import { TodoListComponent } from './componentes/todo-home/todo-list/todo-list.component';
import { TodoRegisterComponent } from './componentes/todo-home/todo-register/todo-register.component';

import { LoginComponent } from './componentes/login/login.component';
import { NavmenuComponent } from './componentes/navmenu/navmenu.component';
import { HomeComponent } from './componentes/home/home.component';
import { FilterPipe } from './pipes/filter.pipe';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';

import { ActorHomeComponent } from './componentes/actor-home/actor-home.component';
import { ListadoComponent } from './componentes/actor-home/listado/listado.component';
import { AltaActorComponent } from './componentes/actor-home/alta-actor/alta-actor.component';

import { PeliculasHomeComponent } from './componentes/peliculas-home/peliculas-home.component';
import { ListaComponent } from './componentes/peliculas-home/lista/lista.component';
import { AltaPeliculaComponent } from './componentes/peliculas-home/alta-pelicula/alta-pelicula.component';
import { BorrarPeliculaComponent } from './componentes/peliculas-home/borrar-pelicula/borrar-pelicula.component';
import { DetallePeliculaComponent } from './componentes/peliculas-home/detalle-pelicula/detalle-pelicula.component';
import { PeliculaAltaComponent } from './componentes/peliculas-home/pelicula-alta/pelicula-alta.component';
import { PeliculasActoresComponent } from './componentes/peliculas-home/peliculas-actores/peliculas-actores.component';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';
import { PaisesListadoComponent } from './componentes/paises-listado/paises-listado.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoHomeComponent,
    TodoEditComponent,
    TodoListComponent,
    TodoRegisterComponent,
    LoginComponent,
    NavmenuComponent,
    HomeComponent,
    FilterPipe,
    BusquedaComponent,
    ActorHomeComponent,
    ListadoComponent,
    PeliculasHomeComponent,
    ListaComponent,
    AltaActorComponent,
    AltaPeliculaComponent,
    BorrarPeliculaComponent,
    DetallePeliculaComponent,
    PeliculaAltaComponent,
    PeliculasActoresComponent,
    TablaPaisesComponent,
    PaisesListadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxSpinnerModule,
    NgxCaptchaModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    NoopAnimationsModule,
    HttpClientModule
  ],
  providers: [
    NgxSpinnerService,
    AngularFireAuth,//
    AngularFirestore//
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
