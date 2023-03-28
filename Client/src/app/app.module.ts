import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from "./Components/barra-navegacion/BarraNavegacionComponent";
import { InicioComponent } from './Components/inicio/inicio.component';
import { BarraFinalComponent } from './Components/barra-final/barra-final.component';
import { RouterModule } from '@angular/router';
import { CartelerasComponent } from './Components/carteleras/carteleras.component';
import { CarouselMoviesComponent } from './Components/carousel-movies/carousel-movies.component';
import { HeaderPresentacionComponent } from './Components/header-presentacion/header-presentacion.component';
import { ComentariosCarteleraComponent } from './Components/comentarios-cartelera/comentarios-cartelera.component';
import { LoginComponent } from './Components/login/login.component';
import { FormularioLoginComponent } from './Components/formulario-login/formulario-login.component';
import { NavbarLoginComponent } from './Components/navbar-login/navbar-login.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { RegistroFormularioComponent } from './Components/registro-formulario/registro-formulario.component';
import { NavbarRegistroComponent } from './Components/navbar-registro/navbar-registro.component';
import { NavbarUsuarioSesionComponent } from './Components/navbar-usuario-sesion/navbar-usuario-sesion.component';
import { UsuarioHomeComponent } from './Components/usuario-home/usuario-home.component';
import { InformacionUsuarioComponent } from './Components/informacion-usuario/informacion-usuario.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { InformacionPeliculaComponent } from './Components/informacion-pelicula/informacion-pelicula.component';
import { PeliculaComponent } from './Components/pelicula/pelicula.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxStarRatingModule } from 'ngx-star-rating';

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    InicioComponent,
    BarraFinalComponent,
    CartelerasComponent,
    CarouselMoviesComponent,
    HeaderPresentacionComponent,
    ComentariosCarteleraComponent,
    LoginComponent,
    FormularioLoginComponent,
    NavbarLoginComponent,
    RegistroComponent,
    RegistroFormularioComponent,
    NavbarRegistroComponent,
    NavbarUsuarioSesionComponent,
    UsuarioHomeComponent,
    InformacionUsuarioComponent,
    UsuarioComponent,
    InformacionPeliculaComponent,
    PeliculaComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    NgxStarRatingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
