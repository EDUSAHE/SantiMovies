import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

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
    this.usuarioService.Existe(this.CorreoUser,this.PasswordUser).subscribe((resUser:any) =>{
      this.CorreoUser = ""
      this.PasswordUser = ""
      console.log(resUser)
      if(resUser!=-1){
        this.router.navigateByUrl("/");
      }
    }, err => console.error(err))
  }

}
