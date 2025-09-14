// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css"; // Autoplay no requiere CSS adicional

import CardItem from "../components/CardItem";
import Imagen from "../components/Imagen";

import sihce from "../assets/sihce.jpg";
import helpdesk from "../assets/helpdesk.jpg";
import ipress from "../assets/ipress.jpg";
import herramientasDigital from "../assets/herramientasDigital.png";

import MiniNavbar from "../components/MiniNavBar";

import "./Home.css";

// ---- tarjetas del carrusel ----
const cards = [
  {
    path: "/sihce",
    image: sihce,
    title: "SIHCE",
    description:
      "Módulo de seguimiento del avance del SIHCE en los establecimientos de salud.",
  },
  {
    path: "https://saturno.systemperu.digital/login",
    image: helpdesk,
    title: "Mesa de Ayuda",
    description:
      "Centro de soporte técnico y atención de incidencias informáticas (Helpdesk).",
  },
  {
    path: "/Ipress",
    image: ipress,
    title: "IPRESS ICA",
    description:
      "Información sobre los establecimientos de salud en la región Ica.",
  },
  // { path: "/Indicadores", image: indicadores, title: "Indicadores", description: "Panel de indicadores clave para la evaluación de desempeño." },
  {
    path: "/HerramientasDigitales",
    image: herramientasDigital,
    title: "Herramientas",
    description:
      "Centro de recursos con guías de instalación, videotutoriales y comunicados técnicos.",
  },
];

const Home = () => {
  
  return (

    <Imagen>
      <MiniNavbar />   {/* 👈 aparece en la esquina superior izquierda */}
      <div className="container text-center pt-3">
        <h2 className="title-sihce">
          SISTEMA DE INFORMACIÓN DE HISTORIA CLÍNICA ELECTRÓNICA (SIHCE)
        </h2>

        <div className="descripcion-sihce mx-auto px-3">
          Es un sistema informático desarrollado por el Ministerio de Salud del
          Perú para gestionar la información clínica de los pacientes de manera
          electrónica. Su objetivo principal es optimizar la atención en salud,
          facilitando el acceso a la información clínica de los pacientes por
          parte de los profesionales de la salud y mejorando la toma de
          decisiones clínicas.
          <Link to="/HistorySihce" className="link-vermas">
            Ver más
          </Link>
        </div>

        {/* Carrusel */}
        <div className="carrusel-wrapper mt-4">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                {card.path.startsWith("http") ? (
                  <a
                    href={card.path}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <CardItem
                      image={card.image}
                      title={card.title}
                      description={card.description}
                    />
                  </a>
                ) : (
                  <Link to={card.path} style={{ textDecoration: "none" }}>
                    <CardItem
                      image={card.image}
                      title={card.title}
                      description={card.description}
                    />
                  </Link>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Imagen>
  );
};

export default Home;