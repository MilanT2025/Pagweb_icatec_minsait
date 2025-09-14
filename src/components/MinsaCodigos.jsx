import React, { useState, useEffect } from "react";
import axios from "axios";

const MinsaCodigos = () => {
  const [manuales, setManuales] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [filtroTipo, setFiltroTipo] = useState("");

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3005/api/manuales", {
        params: {
          busqueda: busqueda,
          tipo: filtroTipo,
          limite: 10,
        },
      });
      setManuales(res.data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [busqueda, filtroTipo]);


  return (
    <div className="container">
      <h2>Manual de Códigos MINSA</h2>

      <div className="d-flex gap-2 mb-3">
        <input
          type="text"
          placeholder="Buscar por código o descripción"
          className="form-control"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <select
          className="form-select"
          value={filtroTipo}
          onChange={(e) => setFiltroTipo(e.target.value)}
        >
          <option value="">Todos los tipos</option>
          <option value="CP">CP</option>
          <option value="LP">LP</option>
          {/* Agrega más si hay otros tipos */}
        </select>
      </div>

      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Código</th>
            <th>Descripción</th>
            <th>Tipo</th>
            <th>Edad Mín.</th>
            <th>Edad Máx.</th>
          </tr>
        </thead>
        <tbody>
          {manuales.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.cod_item}</td>
              <td>{item.descrip_item}</td>
              <td>{item.tipo}</td>
              <td>{item.min_edad}</td>
              <td>{item.max_edad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MinsaCodigos;
