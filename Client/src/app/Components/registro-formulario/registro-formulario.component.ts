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
    if(this.newUser.Password===this.confirmPassword){
      this.usuarioService.validarCorreo(this.newUser.Correo).subscribe((resValida:any)=>{
        if(resValida==200){
          Swal.fire({
            title: '¡Este correo ya está registrado!',
            icon: 'error',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Intentar de nuevo'
          }).then((result) => {
            if (result.isConfirmed) {}
          })
        }
        else{
          this.usuarioService.CrearUsuario(this.newUser).subscribe((res:any) =>{
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Cuenta creada',
              showConfirmButton: false,
              timer: 1500
            })
            this.usuarioService.Existe(this.newUser.Correo,this.newUser.Password).subscribe((resExiste:any)=>{
              localStorage.setItem("idUsuario",resExiste.idUsuario)
              this.newUser = new Usuario()
              this.confirmPassword = ""
              this.router.navigateByUrl("/")
            },
            err => console.error(err))
          }, 
          err => console.error(err))
        }
      },
      err => console.error(err))
    }
    else{
      Swal.fire({
        title: '¡Las contraseñas no coinciden!',
        icon: 'error',
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Intentar de nuevo'
      }).then((result) => {
        if (result.isConfirmed) {
          this.confirmPassword = ""
          this.newUser.Password=""
        }
      })
    }
  }

}
