const HerramientasDigitales = () => {
  return (
    <div className="container py-5 text-center">
      <h2 className="mb-4">Herramientas Digitales</h2>

      {/* Manuales de Sistemas Operativos */}
      <section className="mb-5">
        <h4 className="text-primary">📁 Manual de Recortes (Windows)</h4>
        <a
          href="/pdf/manual-recortes.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary mt-2"
        >
          Descargar Manual
        </a>
      </section>

      {/* Manual de Mesa de Ayuda */}
      <section className="mb-5">
        <h4 className="text-primary">🛠️ Manual de Mesa de Ayuda</h4>
        <a
          href="../Documents/Manual_Mesa_Ayuda.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-success mt-2"
        >
          Descargar Manual
        </a>
      </section>

      {/* Manual de Firma Electrónica */}
      <section className="mb-5">
        <h4 className="text-primary">🔐 Manual de Firma Electrónica</h4>
        <a
          href="../Documents/Manual_Instalacion_Firma_Digital.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-danger mt-2"
        >
          Descargar Manual
        </a>
      </section>
      {/* Manual de Codigos de Minsa */}
{/*       <section className="mb-5">
        <h4 className="text-primary">📄 Codigo de Minsa</h4>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-warning mt-2"
        >
          Ingresar
        </a>
      </section> */}
    </div>
  );
};

export default HerramientasDigitales;
