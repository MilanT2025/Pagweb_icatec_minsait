import React, { useMemo, useState } from "react";
import { ResolucionesMinsa } from "../data/ResolucionesMinsa";

// util: días entre hoy y una fecha
const daysFrom = (iso) => {
  const d = new Date(iso);
  const diff = (Date.now() - d.getTime()) / (1000 * 60 * 60 * 24);
  return Math.floor(diff);
};

const PAGE_SIZE = 10;

const Resoluciones = () => {
  const [q, setQ] = useState("");
  const [year, setYear] = useState("todos");
  const [tipo, setTipo] = useState("todos");
  const [tema, setTema] = useState("todos");
  const [page, setPage] = useState(1);

  // opciones dinámicas
  const years = useMemo(() => {
    const ys = new Set(ResolucionesMinsa.map((r) => r.year));
    return Array.from(ys).sort((a, b) => b - a);
  }, []);

  const tipos = useMemo(() => {
    const ts = new Set(ResolucionesMinsa.map((r) => r.tipo));
    return Array.from(ts).sort();
  }, []);

  const temas = useMemo(() => {
    const ts = new Set(ResolucionesMinsa.map((r) => r.tema));
    return Array.from(ts).sort();
  }, []);

  // filtro + orden
  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    let list = ResolucionesMinsa.filter((r) => {
      const okYear = year === "todos" || r.year === Number(year);
      const okTipo = tipo === "todos" || r.tipo === tipo;
      const okTema = tema === "todos" || r.tema === tema;
      const okQ =
        query.length === 0 ||
        r.titulo.toLowerCase().includes(query) ||
        r.codigo.toLowerCase().includes(query) ||
        r.tema.toLowerCase().includes(query);

      return okYear && okTipo && okTema && okQ;
    });

    // orden: fecha desc (más reciente primero)
    list.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    return list;
  }, [q, year, tipo, tema]);

  // paginación
  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const pageSafe = Math.min(page, totalPages);
  const pageItems = filtered.slice(
    (pageSafe - 1) * PAGE_SIZE,
    pageSafe * PAGE_SIZE
  );

  const clearFilters = () => {
    setQ("");
    setYear("todos");
    setTipo("todos");
    setTema("todos");
    setPage(1);
  };

  return (
    <div className="container py-4">
      <div className="bg-primary text-white py-3 px-4 rounded-top">
        <h1 className="h3 m-0 fw-bold">
          Resoluciones del MINSA
        </h1>
      </div>

      {/* Filtros */}
      <div className="row g-2 align-items-end mb-3">
        <div className="col-md-4">
          <label className="form-label">Buscar</label>
          <input
            className="form-control"
            placeholder="Ej: SIHCE, R.M."
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setPage(1);
            }}
          />
        </div>

        <div className="col-md-2">
          <label className="form-label">Año</label>
          <select
            className="form-select"
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
              setPage(1);
            }}
          >
            <option value="todos">Todos</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-2">
          <label className="form-label">Tipo</label>
          <select
            className="form-select"
            value={tipo}
            onChange={(e) => {
              setTipo(e.target.value);
              setPage(1);
            }}
          >
            <option value="todos">Todos</option>
            {tipos.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-2">
          <label className="form-label">Tema</label>
          <select
            className="form-select"
            value={tema}
            onChange={(e) => {
              setTema(e.target.value);
              setPage(1);
            }}
          >
            <option value="todos">Todos</option>
            {temas.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-2 d-grid">
          <button className="btn btn-outline-secondary" onClick={clearFilters}>
            Limpiar
          </button>
        </div>
      </div>

      {/* Resumen */}
      <div className="d-flex justify-content-between align-items-center mb-2">
        <small className="text-muted">
          {total} documento{total !== 1 ? "s" : ""} encontrado
          {total !== 1 ? "s" : ""}.
        </small>
        <small className="text-muted">
          Página {pageSafe} de {totalPages}
        </small>
      </div>

      {/* Lista */}
      <div className="list-group">
        {pageItems.map((r) => {
          const isNew = daysFrom(r.fecha) <= 30;
          return (
            <div
              key={r.id}
              className="list-group-item list-group-item-action py-3"
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">
                  {r.codigo} — {r.titulo}
                  {isNew && (
                    <span className="badge bg-success ms-2">Nuevo</span>
                  )}
                </h5>
                <small className="text-nowrap">
                  {new Date(r.fecha).toLocaleDateString()}
                </small>
              </div>

              <div className="mb-2">
                <span className="badge bg-primary me-2">{r.tipo}</span>
                <span className="badge bg-info text-dark me-2">{r.tema}</span>
                {r.nivel && (
                  <span className="badge bg-secondary">{r.nivel}</span>
                )}
              </div>

              <div className="d-flex gap-2">
                <a
                  className="btn btn-sm btn-outline-primary"
                  href={r.pdf}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver PDF
                </a>
                <a
                  className="btn btn-sm btn-outline-success"
                  href={r.pdf}
                  download
                >
                  Descargar
                </a>
                <button
                  className="btn btn-sm btn-outline-dark"
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(
                        window.location.origin + r.pdf
                      );
                      alert("Enlace copiado al portapapeles");
                    } catch {
                      alert("No se pudo copiar el enlace");
                    }
                  }}
                >
                  Copiar enlace
                </button>
              </div>
            </div>
          );
        })}

        {total === 0 && (
          <div className="list-group-item">
            <em>No se encontraron documentos con los filtros actuales.</em>
          </div>
        )}
      </div>

      {/* Paginador */}
      {totalPages > 1 && (
        <nav className="mt-3">
          <ul className="pagination pagination-sm mb-0">
            <li className={`page-item ${pageSafe === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
              >
                « Anterior
              </button>
            </li>
            {Array.from({ length: totalPages }).map((_, i) => (
              <li
                key={i}
                className={`page-item ${pageSafe === i + 1 ? "active" : ""}`}
              >
                <button className="page-link" onClick={() => setPage(i + 1)}>
                  {i + 1}
                </button>
              </li>
            ))}
            <li
              className={`page-item ${
                pageSafe === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              >
                Siguiente »
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Resoluciones;
