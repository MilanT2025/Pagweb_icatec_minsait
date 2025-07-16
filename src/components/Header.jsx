import React from "react";
import "./Header.css";
import logoIcatec from "../assets/logo_icatec_2.svg";
import logoMinsa from "../assets/logoMinsa2.svg";
import logoDiresa from "../assets/logo_DIRESA.png";
import logoOite from "../assets/logo_OITE.png";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark header-bar">
      <div className="container-fluid d-flex flex-column flex-md-row justify-content-between align-items-center w-100">
        {/* Logos izquierda: MINSA, DIRESA, OITE */}
        <div className="d-flex align-items-center gap-3">
          <img src={logoMinsa} alt="Logo MINSA" className="logo-giratorio" style={{ height: "50px" }} />
          <img src={logoDiresa} alt="Logo DIRESA" className="logo-giratorio" style={{ height: "100px" }} />
          <img src={logoOite} alt="Logo OITE" className="logo-giratorio" style={{ height: "100px" }} />
        </div>

        {/* Logo derecha: ICATEC */}
        <a className="text-decoration-none" href="/">
          <img src={logoIcatec} alt="Logo ICATEC" className="logo-giratorio" style={{ height: "120px" }} />
        </a>
        {/*         <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        {/* 
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto me-4">
            <li className="nav-item">
              <a className="nav-link text-white fw-bold" href="/">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-bold" href="#">
                Proyectos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-bold" href="#">
                Establecimientos
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white fw-bold login-button"
                href="https://app3.systemperu.digital/login"
              >
                Login
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
  );
};

export default Header;
