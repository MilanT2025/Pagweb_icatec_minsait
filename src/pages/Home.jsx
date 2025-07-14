import React from "react";
import CardItem from "../components/CardItem";
import sihce from "../assets/sihce.jpg";
import helpdesk from "../assets/helpdesk.jpg";
import ipress from "../assets/ipress.jpg";
import indicadores from "../assets/indicadores.jpg";
import Imagen from "../components/Imagen";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <Imagen>
      <div className="container text-center pt-3">
        <h2 className="title-sihce">
          SISTEMA DE INFORMACIÓN DE HISTORIA CLINICA ELECTRONICA. (SIHCE)
        </h2>
        <p className="descripcion-sihce">
          Es un sistema informático desarrollado por el Ministerio de Salud del
          Perú para gestionar la información clínica de los pacientes de manera
          electrónica. Su objetivo principal es optimizar la atención en salud,
          facilitando el acceso a la información clínica de los pacientes por
          parte de los profesionales de la salud y mejorando la toma de
          decisiones clínicas. 
          <Link href="/HistorySihce" className="link-vermas">Ver más</Link>
        </p>
        <div className="row justify-content-center gy-4 mt-2">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <Link to="/sihce" style={{ textDecoration: "none" }}>
              <CardItem
                image={sihce}
                title="SIHCE"
                description="Módulo de seguimiento del avance del SIHCE en los establecimientos de salud."
              />
            </Link>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <Link to="/helpdesk" style={{ textDecoration: "none" }}>
              <CardItem
                image={helpdesk}
                title="Mesa de Ayuda"
                description="Centro de soporte técnico y atención de incidencias informáticas (Helpdesk)."
              />
            </Link>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <Link to="/Ipress" style={{ textDecoration: "none" }}>
              <CardItem
                image={ipress}
                title="IPRESS ICA"
                description="Información sobre los establecimientos de salud en la región Ica."
              />
            </Link>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <Link to="/Indicadores" style={{ textDecoration: "none" }}>
              <CardItem
                image={indicadores}
                title="Indicadores"
                description="Panel de indicadores clave para la evaluación de desempeño."
              />
            </Link>
          </div>
        </div>
      </div>
    </Imagen>
  );
};

export default Home;
