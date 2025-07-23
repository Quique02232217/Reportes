const {
  obtenerReportesPorCodigoProyecto,
  ejecutarReporte,
} = require("../services/reporteService");

const getReportesPorProyecto = async (req, res) => {
  const { codigo_proyecto } = req.params;

  try {
    const reportes = await obtenerReportesPorCodigoProyecto(codigo_proyecto);
    res.status(200).json(reportes);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const ejecutarReportes = async (req, res) => {
  try {
    await ejecutarReporte(req, res);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { getReportesPorProyecto, ejecutarReportes };
