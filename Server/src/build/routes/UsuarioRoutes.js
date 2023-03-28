"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsuarioController_1 = require("../controllers/UsuarioController");
class UsuarioRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', UsuarioController_1.usuarioController.list);
        this.router.post('/create', UsuarioController_1.usuarioController.create);
        this.router.post('/autentificar', UsuarioController_1.usuarioController.existe);
        this.router.post('/valida', UsuarioController_1.usuarioController.existeCorreo);
        this.router.delete('/delete/:idUsuario', UsuarioController_1.usuarioController.delete);
    }
}
const usuarioRoutes = new UsuarioRoutes();
exports.default = usuarioRoutes.router;
