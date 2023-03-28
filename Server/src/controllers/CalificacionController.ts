import { Request, Response } from 'express'
import pool from '../database'

class CalificacionController {

    public async create(req: Request, res: Response): Promise<void> {
		const resp = await pool.query('INSERT INTO calificacion SET ?', [req.body])
		res.json(resp)
	}

    public async update(req: Request, res: Response): Promise<void> {
		const { idPelicula,idUsuario,Calificacion } = req.params
		const resp = await pool.query('UPDATE calificacion set Calificacion=? WHERE idPelicula=? AND idUsuario =?', [Calificacion, idPelicula,idUsuario])
		res.json(resp)
	}

    public async listOne(req: Request, res: Response): Promise<void> {
		const { idPelicula,idUsuario } = req.params;
		const respuesta = await pool.query('SELECT Calificacion FROM calificacion WHERE idPelicula = ? AND idUsuario=? ', [idPelicula,idUsuario])
		if (respuesta.length > 0) {
			res.json(respuesta[0])
			return;
		}
		res.status(404).json({ 'mensaje': 'Calificacion no encontrada' })
	}

    public async existe(req: Request, res: Response): Promise<void> {
		const { idUsuario,idPelicula} = req.body;
		let consulta = "SELECT Calificacion  FROM calificacion WHERE idPelicula = '" + idPelicula +"' AND idUsuario='" + idUsuario + "'";
		const respuesta = await pool.query(consulta);
		if (respuesta.length > 0) {				
			res.json(200);
			return;
		}
		else
			res.json(-1);
	}
}

export const calificacionController = new CalificacionController()
