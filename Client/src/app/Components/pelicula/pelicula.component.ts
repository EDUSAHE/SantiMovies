import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { CalificacionService } from 'src/app/services/calificacion.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  idMovie:number
  infoMovie:any
  generos: Map<number, string> = new Map();
  Puntuacion:number
  idUsuario:number
  NotNumber:any=NaN
  constructor(private moviesService:MoviesService, private calificacionService:CalificacionService){
    this.idUsuario=Number(localStorage.getItem("idUsuario"))
    this.idMovie=Number(localStorage.getItem("idMovie"))
    this.obtenerInfoPeli()
    this.getCalificacion()
    this.generos.set(28,"Acción")
    this.generos.set(12,"Aventura")
    this.generos.set(16,"Animación")
    this.generos.set(35,"Comedia")
    this.generos.set(80,"Crimen")
    this.generos.set(99,"Documental")
    this.generos.set(18,"Drama")
    this.generos.set(10751,"Familia")
    this.generos.set(14,"Fantasía")
    this.generos.set(36,"Historia")
    this.generos.set(27,"Terror")
    this.generos.set(10402,"Música")
    this.generos.set(9648,"Misterio")
    this.generos.set(10749,"Romance")
    this.generos.set(878,"Ciencia Ficción")
    this.generos.set(10770,"Pelícuala de TV")
    this.generos.set(53,"Suspenso")
    this.generos.set(10752,"Bélica")
    this.generos.set(37,"Western")
    this.Puntuacion = 0
  }

  ngOnInit(): void {
      // this.obtenerInfoPeli()
  }
  
  obtenerInfoPeli(){  
    this.moviesService.infomovie(this.idMovie).subscribe((resMovie:any)=>{
      this.infoMovie=resMovie;
      console.log(this.infoMovie)
    },
      err => console.error(err))
  }
  convertirFecha(fecha:any){
    const date = new Date(fecha)
    return date.getUTCDay() + " de " + date.toLocaleString("es-MX",{month:"long"}) + " del " + date.getFullYear()
  }
  getCalificacion(){
    this.calificacionService.existeCalificacion(this.idMovie,this.idUsuario).subscribe((resExiste:any)=>{
      if(resExiste==200){
        this.calificacionService.obtenerCalificacion(this.idMovie,this.idUsuario).subscribe((resCalif:any)=>{
          this.Puntuacion=resCalif.Calificacion
          console.log(this.Puntuacion)
        },
        err => console.log(err))
      }else
        this.Puntuacion=0
    },
    err => console.error(err))
  }
  actualizaCalif(){
    this.calificacionService.existeCalificacion(this.idMovie,this.idUsuario).subscribe((resExiste:any)=>{
      if(resExiste==200){
        this.calificacionService.updateCalificacion(this.idMovie,this.idUsuario,this.Puntuacion).subscribe((resUpdate:any)=>{ },
        err => console.log(err))
      }else
        this.calificacionService.insertarCalificacion(this.idMovie,this.idUsuario,this.Puntuacion).subscribe((resCreate:any)=>{ },
        err => console.log(err))
    },
    err => console.error(err))
  }
}
