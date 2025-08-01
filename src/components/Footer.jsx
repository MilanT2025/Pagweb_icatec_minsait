import iconoSihce from '../assets/LogoSihce.png';
import iconoWatsApp from '../assets/whatsapp.png';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 px-4">
      <div className="row text-center text-md-start">
        {/* Columna 1: Título y SIHCE */}
        <div className="col-12 col-md-4 mb-2 mb-md-0">
          <h6 className="mb-0">Directorio Web</h6>
          <div className="d-flex align-items-center mt-1">
            <img
              src={iconoSihce}
              alt="Ícono SIHCE"
              style={{ width: "40px", height: "40px", marginRight: "8px" }}
            />
            <a
              href="https://sihce.minsa.gob.pe/"
              className="text-white text-decoration-none small"
            >
              SIHCE
            </a>
          </div>
        </div>

        {/* Columna 2: ICATEC centrado */}
        <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
          <p className="mb-0 text-center">
            © 2025 ICATEC. Todos los derechos reservados.
          </p>
        </div>

        {/* Columna 3 vacía o futura expansión */}
        <div className="col-12 col-md-4"></div>
      </div>
    </footer>
  );
};

export default Footer;
