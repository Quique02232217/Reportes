const { buscarProyectoPorCodigo } = require("../models/proyectoModel");
const { obtenerReportesPorPlataforma } = require("../models/reporteModel");
const { obtenerParametrosPorReporte } = require("../models/parametroModel");

const obtenerReportesPorCodigoProyecto = async (codigo_proyecto) => {
  const proyecto = await buscarProyectoPorCodigo(codigo_proyecto);

  if (!proyecto) {
    throw new Error("Proyecto no encontrado con ese código.");
  }

  const reportesRaw = await obtenerReportesPorPlataforma(
    proyecto.id_plataforma
  );
  const reportes = [];

  for (const r of reportesRaw) {
    const parametros = await obtenerParametrosPorReporte(r.id_reporte);
    reportes.push({
      id_reporte: r.id_reporte,
      nombre: r.nombre,
      categoria: r.categoria,
      detalle: r.detalle,
      parametros,
    });
  }

  return reportes;
};

module.exports = { obtenerReportesPorCodigoProyecto };
