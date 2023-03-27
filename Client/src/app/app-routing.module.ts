import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculaComponent } from './Components/pelicula/pelicula.component';
import { LoginComponent } from './Components/login/login.component';
import { InicioComponent } from './Components/inicio/inicio.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'pelicula/:idMovie',
    component: PeliculaComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'registrar',
    component: RegistroComponent
  },
  {
    path: 'usuario',
    component: UsuarioComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
