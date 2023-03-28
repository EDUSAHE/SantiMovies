import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent{
  idUsuario:Number
  NotNumber:any = NaN
  constructor(private router:Router) {
    this.idUsuario = Number(localStorage.getItem("idUsuario"))
  }
  ngOnInit(): void {
    console.log(this.idUsuario)
  }
  logout(){
    this.idUsuario = NaN
    console.log(this.idUsuario)
    localStorage.removeItem("idUsuario")
    this.router.navigateByUrl("/")
  }

}
