import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {}
  CrearUsuario(Usuario:any){
    return this.http.post(`${environment.API_SM}/usuarios/create`,Usuario);
  }
  Existe(Correo: string, Password: string) {
    return this.http.post(`${environment.API_SM}/usuarios/autentificar`, {Correo: Correo, Password: Password});
  }
}
