import { Router } from 'express'
import { calificacionController } from '../controllers/CalificacionController'
class CalificacionRoutes {

	public router: Router = Router()

	constructor() {
		this.config()
	}

	config() : void {
		this.router.get('/listOne/:idPelicula/:idUsuario', calificacionController.listOne)
		this.router.post('/create', calificacionController.create)
		this.router.post('/autentificar', calificacionController.existe);
		this.router.put('/update/:idPelicula/:idUsuario/:Calificacion', calificacionController.update)
	}

}

const calificacionRoutes = new CalificacionRoutes()
export default calificacionRoutes.router