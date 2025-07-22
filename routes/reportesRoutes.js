const express = require("express");
const router = express.Router();
const { getReportesPorProyecto } = require("../controller/reportesController");

router.get("/api/proyecto/:codigo_proyecto", getReportesPorProyecto);

module.exports = router;
