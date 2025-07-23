const express = require("express");
const router = express.Router();
const { getReportesPorProyecto } = require("../controller/reportesController");
const { ejecutarReportes } = require("../controller/reportesController");

router.get("/api/proyecto/:codigo_proyecto", getReportesPorProyecto);
router.get(
  "/proyecto/:codigo_proyecto/reporte/:id_reporte/ejecutar",
  ejecutarReportes
);
module.exports = router;
