const express = require("express");
const cors = require("cors");
const reportesRoutes = require("./routes/reportesRoutes");
const app = express();

app.use(cors());
app.use(express.json());
app.use(reportesRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
  console.log(`Swagger disponible en http://localhost:${PORT}/api-docs`);
});
