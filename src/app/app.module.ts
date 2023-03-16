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

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    InicioComponent,
    BarraFinalComponent,
    CartelerasComponent,
    CarouselMoviesComponent,
    HeaderPresentacionComponent,
    ComentariosCarteleraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', component: InicioComponent},

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
