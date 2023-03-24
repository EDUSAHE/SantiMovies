"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioController = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const database_1 = __importDefault(require("../database"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
class UsuarioController {
    constructor() {
        dotenv_1.default.config();
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const respuesta = yield database_1.default.query('SELECT * FROM usuario');
            res.json(respuesta);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let password = req.body.Password;
            var salt = bcryptjs_1.default.genSaltSync(10);
            bcryptjs_1.default.hash(password, salt).then((nuevoPassword) => __awaiter(this, void 0, void 0, function* () {
                req.body.Password = nuevoPassword;
                try {
                    const resp = yield database_1.default.query("INSERT INTO usuario set ?", [req.body]);
                    res.json(resp);
                }
                catch (error) {
                    res.status(500).json({ errorSQL: error.sqlMessage, sql: error.sql });
                }
            }));
        });
    }
    existe(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { Correo, Password } = req.body;
            let consulta = "SELECT idUsuario,Password  FROM usuario WHERE Correo = '" + Correo + "'";
            const respuesta = yield database_1.default.query(consulta);
            if (respuesta.length > 0) {
                bcryptjs_1.default.compare(Password, respuesta[0].Password, (err, resEncriptar) => {
                    if (resEncriptar == true) {
                        const token = jsonwebtoken_1.default.sign(Correo, process.env.TOKEN_SECRET || 'prueba');
                        res.json({ "idUsuario": respuesta[0].idUsuario, "token": token, "nivel": respuesta[0].nivel });
                    }
                    else
                        res.json(-1);
                    return;
                });
            }
            else
                res.json(-1);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idUsuario } = req.params;
            const resp = yield database_1.default.query(`DELETE FROM usuario WHERE idUsuario=${idUsuario}`);
            res.json(resp);
        });
    }
}
exports.usuarioController = new UsuarioController();
