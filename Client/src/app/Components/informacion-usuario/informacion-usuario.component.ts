import { Component } from '@angular/core';

@Component({
  selector: 'app-informacion-usuario',
  templateUrl: './informacion-usuario.component.html',
  styleUrls: ['./informacion-usuario.component.css']
})
export class InformacionUsuarioComponent {
  loggedIn: boolean = true; //muestra informacio del usuario si es true si es false se redigira a iniciar sesion

  // Resto del código del componente
  usuario: any = {
    username: 'miNombreDeUsuario',
    email: 'miCorreoElectronico@example.com',
    // Otras propiedades relevantes del usuario
  };
  credenciales: any = {
    username: 'miNombreDeUsuario',
    password: 'miContraseña',
  };

  cerrarSesion(): void {
    // Borra las credenciales de inicio de sesión del usuario
    // Redirige al usuario a la página de inicio de sesión
  }
  iniciarSesion(): void {
    // Aquí iría el código para iniciar sesión
  }


}
