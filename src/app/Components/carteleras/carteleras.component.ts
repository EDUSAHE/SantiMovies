import { Component } from '@angular/core';
import { ServiceAPI } from 'src/app/services/API';
declare var $: any

@Component({
  selector: 'app-carteleras',
  templateUrl: './carteleras.component.html',
  styleUrls: ['./carteleras.component.css']
})
export class CartelerasComponent {

  peliculas:any[]

  constructor(private API:ServiceAPI){
    this.peliculas = []
  }
  ngOnInit(): void {
    this.ObtenerPeli()

  }
  ObtenerPeli(): void {
		this.API.ObtenerPeliculas().subscribe((resPeliculas: any) => {
			this.peliculas = resPeliculas
			console.log(this.peliculas)
		},
			err => console.error(err))
	}
}