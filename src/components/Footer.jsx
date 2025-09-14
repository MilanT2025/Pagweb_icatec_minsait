import iconoSihce from '../assets/LogoSihce.png';
import iconoYoutube from '../assets/Logoyoutube.png';
import iconoFacebook from '../assets/Logofacebook.png';
import iconoTiktok from '../assets/Logotiktok.png';

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
          <div className="d-flex align-items-center mt-2">  
            <img
              src={iconoYoutube}
              alt="Ícono Youtube"
              style={{ width: "30px", height: "30px", marginRight: "8px" }}
            />
            <a
              href="https://www.youtube.com/@icatecperu"
              className="text-white text-decoration-none small"
            >
              @Icatec Youtube
            </a>
          </div>
          <div className="d-flex align-items-center mt-2">
             <img
              src={iconoFacebook}
              alt="Ícono Facebook"
              style={{ width: "30px", height: "30px", marginRight: "8px" }}
            />
            <a
              href="https://www.facebook.com/icatecperu"
              className="text-white text-decoration-none small"
            >
              @Icatec Facebook
            </a>
          </div>
          <div className="d-flex align-items-center mt-2">
             <img
              src={iconoTiktok}
              alt="Ícono Tiktok"
              style={{ width: "30px", height: "30px", marginRight: "8px" }}
            />
            <a
              href="https://www.tiktok.com/@icatecperu"
              className="text-white text-decoration-none small"
            >
              @Icatec Tiktok
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
