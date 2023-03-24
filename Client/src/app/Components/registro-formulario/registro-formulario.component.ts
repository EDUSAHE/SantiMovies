import { Component,OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro-formulario',
  templateUrl: './registro-formulario.component.html',
  styleUrls: ['./registro-formulario.component.css']
})
export class RegistroFormularioComponent implements OnInit {
  newUser:Usuario
  confirmPassword:string
  constructor(private usuarioService:UsuarioService, private router:Router){
    this.newUser = new Usuario()
    this.confirmPassword = ""
  }

  ngOnInit(): void {
      
  }

  agregarUsuario(){
    console.log(this.newUser)
    this.usuarioService.CrearUsuario(this.newUser).subscribe((res:any) =>{
      this.newUser = new Usuario()
      this.confirmPassword = ""
      this.router.navigateByUrl("/")

    }, err => console.error(err))
  }

}
