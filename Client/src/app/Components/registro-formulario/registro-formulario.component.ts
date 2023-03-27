import { Component,OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
      if(res!=500){
        this.newUser = new Usuario()
        this.confirmPassword = ""
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Cuenta creada',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigateByUrl("/")
      }
      else{
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: '¡Esta cuenta ya existe!',
          showConfirmButton: false,
          timer: 1500
        })
      }

    }, err => console.error(err))
  }

}
