import { Component,OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
declare var $: any

@Component({
  selector: 'app-carteleras',
  templateUrl: './carteleras.component.html',
  styleUrls: ['./carteleras.component.css']
})
export class CartelerasComponent implements OnInit{
  idPage:number
  movies : any[]
  generos: Map<number, string> = new Map();
  path_poster:any

  constructor(private moviesServices: MoviesService){
    this.path_poster = "https://image.tmdb.org/t/p/w500"
    this.idPage = 1
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
    this.listaMovies(this.idPage)
  }

  listaMovies(idPage:number){
    this.moviesServices.obtenermovies(idPage).subscribe((resMovies:any)=>{
      this.movies = resMovies.results
      // console.log(this.movies)
    },
      err => console.error(err))
  }

  convertirFecha(fecha:any){
    const date = new Date(fecha)
    return date.getUTCDay() + " de " + date.toLocaleString("es-MX",{month:"long"}) + " del " + date.getFullYear()
  }
}