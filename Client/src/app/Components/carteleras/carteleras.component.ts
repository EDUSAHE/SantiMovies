import { Component,OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Router } from '@angular/router';

declare var $:any;



@Component({
  selector: 'app-carteleras',
  templateUrl: './carteleras.component.html',
  styleUrls: ['./carteleras.component.css']
})
export class CartelerasComponent implements OnInit{
  Page:number =0
  idPage:number =0
  pageSize: number = 16
  movies : any[]
  path_poster:any
  generos: Map<number, string> = new Map();

  constructor(private moviesServices: MoviesService, private router:Router,){
    this.path_poster = "https://image.tmdb.org/t/p/w500"
    this.movies = []
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
    this.listaMovies(1)
  }

  listaMovies(event:any){
    this.Page=event
    if(event>this.idPage && event<=1000){
      this.idPage = event
      this.moviesServices.obtenermovies(this.idPage).subscribe((resMovies:any)=>{
        this.movies.push(...resMovies.results)
      },
        err => console.error(err))
    }
  }

  convertirFecha(fecha:any){
    const date = new Date(fecha)
    return date.getUTCDay() + " de " + date.toLocaleString("es-MX",{month:"long"}) + " del " + date.getFullYear()
  }

  mostrarInfo(idMovie:any){
    localStorage.setItem("idMovie",idMovie)
    this.router.navigateByUrl(`/pelicula/${idMovie}`)

  }


}