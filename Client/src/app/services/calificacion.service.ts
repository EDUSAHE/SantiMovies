import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CalificacionService {

  constructor(private http:HttpClient) { }

  obtenerCalificacion(idPelicula:any,idUsuario:any){
    return this.http.get(`${environment.API_SM}/calificacion/listOne/${idPelicula}/${idUsuario}`);
  }
  existeCalificacion(idPelicula:any,idUsuario:any){
    return this.http.post(`${environment.API_SM}/calificacion/autentificar`,{idPelicula:idPelicula,idUsuario:idUsuario});
  }
  insertarCalificacion(idPelicula:any,idUsuario:any,Calificacion:any){
    return this.http.post(`${environment.API_SM}/calificacion/create`,{idPelicula:idPelicula,idUsuario:idUsuario,Calificacion:Calificacion});
  }
  updateCalificacion(idPelicula:any,idUsuario:any,Calificacion:any){
    return this.http.put(`${environment.API_SM}/calificacion/update/${idPelicula}/${idUsuario}/${Calificacion}`,{});
  }
}
