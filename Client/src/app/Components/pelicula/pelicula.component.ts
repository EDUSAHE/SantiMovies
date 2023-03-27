import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  idMovie:number
  infoMovie:any
  generos: Map<number, string> = new Map();
  constructor(private moviesService:MoviesService){
    this.idMovie=Number(localStorage.getItem("idMovie"))
    this.obtenerInfoPeli()
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
}
