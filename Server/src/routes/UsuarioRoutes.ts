import { Router } from 'express'
import { usuarioController } from '../controllers/UsuarioController'

class UsuarioRoutes {

	public router: Router = Router()

	constructor() {
		this.config()
	}

	config() : void {
		this.router.get('/', usuarioController.list)
		this.router.post('/create', usuarioController.create)
		this.router.post('/autentificar', usuarioController.existe);
		this.router.post('/valida', usuarioController.existeCorreo);
		this.router.delete('/delete/:idUsuario', usuarioController.delete)
		
	}

}

const usuarioRoutes = new UsuarioRoutes()
export default usuarioRoutes.router