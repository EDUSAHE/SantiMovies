import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-login',
  templateUrl: './formulario-login.component.html',
  styleUrls: ['./formulario-login.component.css']
})
export class FormularioLoginComponent implements OnInit {
  CorreoUser:any
  PasswordUser:any
  constructor(private usuarioService:UsuarioService, private router:Router){
    this.CorreoUser = "" 
    this.PasswordUser = ""
  }
  ngOnInit(): void {
      
  }

  login(){
    this.usuarioService.validarCorreo(this.CorreoUser).subscribe((resValidar:any)=>{
      if(resValidar==-1){
        this.CorreoUser = ""
        this.PasswordUser = ""
        Swal.fire({
          title: '¡Cuenta inexistente!',
          icon: 'error',
          showCancelButton: false,
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Intentar de nuevo'
        }).then((result) => {
          if (result.isConfirmed) {}
        })
      }
      else{
        this.usuarioService.Existe(this.CorreoUser,this.PasswordUser).subscribe((resUser:any) =>{
          this.CorreoUser = ""
          this.PasswordUser = ""
          if(resUser==-1){
            Swal.fire({
              title: '¡Datos inválidos!',
              icon: 'error',
              showCancelButton: false,
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'Intentar de nuevo'
            }).then((result) => {
              if (result.isConfirmed) {}
            })
          }
          else{
            localStorage.setItem("idUsuario",resUser.idUsuario)
            this.router.navigateByUrl("/");
          }
        }, err => console.error(err))
      }
    },
    err => console.error(err))
  }

}
