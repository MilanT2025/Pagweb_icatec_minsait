import React, { useState, useEffect } from "react";
import fondo1 from "../assets/fondo.jpg";
import fondo2 from "../assets/fondo2.jpg";
import fondo3 from "../assets/fondo3.jpg";
import fondo4 from "../assets/fondo4.jpg";
import fondo5 from "../assets/fondo5.jpg";

const fondos = [fondo1, fondo2, fondo3, fondo4, fondo5];

const Imagen = ({ children }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % fondos.length);
    }, 5000); // cambia cada 5 segundos
    return () => clearInterval(intervalo);
  }, []);

  const fondoActual = fondos[index];

  const estiloFondo = {
    backgroundImage: `linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url(${fondoActual})`,
    backgroundSize: "cover", // asegura que cubra todo
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    minHeight: "100vh",
    paddingTop: "2rem",
    paddingBottom: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "background-image 1s ease-in-out",
  };

  return <div style={estiloFondo}>{children}</div>;
};

export default Imagen;
