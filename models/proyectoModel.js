const pool = require("../models/db");

const buscarProyectoPorCodigo = async (codigo) => {
  const [rows] = await pool.execute(
    `SELECT * FROM proyectos p
     JOIN fuentes_datos_sql f ON p.id_fuente_sql = f.id_fuente_sql
     WHERE LOWER(f.db_name) LIKE ? LIMIT 1`,
    [`${codigo.toLowerCase()}%`]
  );
  return rows[0];
};

module.exports = { buscarProyectoPorCodigo };
