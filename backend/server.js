const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Conexión a MySQL
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // o tu usuario de MySQL
  password: "1234", // si tienes contraseña, colócala
  database: "minsa"
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.error("Error de conexión:", err);
  } else {
    console.log("Conectado a la base de datos MySQL");
  }
});

// Endpoint para obtener los códigos del manual
app.get("/api/manuales", (req, res) => {
    const {busqueda = '', tipo = '', limite = 100 } = req.query;

    let sql = " SELECT * FROM minsa_manual WHERE 1=1 ";
    let params = [];

    if (busqueda) {
        sql += " AND (cod_item LIKE ? OR descrip_item LIKE ?)";
        params.push(`%${busqueda}%`, `%${busqueda}%`);
    }
    if (tipo) {
        sql += " AND tipo = ?";
        params.push(tipo);
    }
    sql += " LIMIT ?";
    params.push(parseInt(100));

  db.query(sql,params, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Iniciar servidor
app.listen(3005, () => {
  console.log("Servidor backend corriendo en http://localhost:3005");
});
