import React from "react";
import "./Header.css";
import logoIcatec from "../assets/logo_icatec_2.svg";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark header-bar">
      <div className="container-fluid">
        <span className="navbar-brand text-white d-flex align-items-center gap-2">
          <a className="icatec-brand text-white text-decoration-none" href="/">
            <img
              src={logoIcatec}
              alt="Logo ICATEC"
              style={{ height: "120px" }}
            />
          </a>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

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
        </div>
      </div>
    </nav>
  );
};

export default Header;
