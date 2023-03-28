"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CalificacionController_1 = require("../controllers/CalificacionController");
class CalificacionRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/listOne/:idPelicula/:idUsuario', CalificacionController_1.calificacionController.listOne);
        this.router.post('/create', CalificacionController_1.calificacionController.create);
        this.router.post('/autentificar', CalificacionController_1.calificacionController.existe);
        this.router.put('/update/:idPelicula/:idUsuario/:Calificacion', CalificacionController_1.calificacionController.update);
    }
}
const calificacionRoutes = new CalificacionRoutes();
exports.default = calificacionRoutes.router;
