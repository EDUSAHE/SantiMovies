import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    NavbarRegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: InicioComponent},
      {path: 'login', component: LoginComponent},
      {path: 'registrar', component: RegistroComponent}

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
