import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import pool from '../database'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

class UsuarioController {

	constructor() {
		dotenv.config()
	}

	public async list(req: Request, res: Response): Promise<void> {
		const respuesta = await pool.query('SELECT * FROM usuario')
		res.json(respuesta)
	}

	public async create(req: Request, res: Response): Promise<void> {
		let password = req.body.Password as any;
		var salt = bcrypt.genSaltSync(10);
		bcrypt.hash(password, salt).then(async (nuevoPassword) => {
			req.body.Password = nuevoPassword;
			try {
				const resp = await pool.query("INSERT INTO usuario set ?", [req.body]);
				res.json(resp);
			} catch (error: any) {
				res.status(500).json({ errorSQL: error.sqlMessage, sql: error.sql })
			}
		})
	}


	public async existe(req: Request, res: Response): Promise<void> {
		const { Correo, Password } = req.body;
		let consulta = "SELECT idUsuario,Password  FROM usuario WHERE Correo = '" + Correo + "'";
		const respuesta = await pool.query(consulta);
		if (respuesta.length > 0) {
			bcrypt.compare(Password, respuesta[0].Password, (err, resEncriptar) => {
				if (resEncriptar == true) {
					const token: string = jwt.sign(Correo, process.env.TOKEN_SECRET || 'prueba')
					res.json({ "idUsuario": respuesta[0].idUsuario, "token": token, "nivel": respuesta[0].nivel })
				}
				else
					res.json(-1);
				return;
			})
		}
		else
			res.json(-1);
	}


	public async delete(req: Request, res: Response): Promise<void> {
		const { idUsuario } = req.params
		const resp = await pool.query(`DELETE FROM usuario WHERE idUsuario=${idUsuario}`)
		res.json(resp)
	}

}

export const usuarioController = new UsuarioController()