import React from "react";
import "./HistorySihce.css";

const HistorySihce = () => {
  return (
    <div className="history-container">
      <h1 className="title">
        SISTEMA DE INFORMACIÓN DE HISTORIA CLÍNICA ELECTRÓNICA
      </h1>

      <section className="section">
        <h2 className="subtitle">Concepto:</h2>
        <p>
          SIHCE, siglas de Sistema de Información de Historia Clínica
          Electrónica, es un sistema informático desarrollado por el Ministerio
          de Salud del Perú para la gestión de historias clínicas en los
          establecimientos de salud del primer nivel de atención...
        </p>
      </section>

      <section className="section">
        <h2 className="subtitle">Beneficios:</h2>

        <div className="benefit">
          <h3>Digitaliza la información del paciente:</h3>
          <p>
            Permite el registro, almacenamiento, actualización y acceso a la
            información clínica de manera electrónica...
          </p>
        </div>

        <div className="benefit">
          <h3>Facilita la atención:</h3>
          <p>
            Al tener la información del paciente disponible de forma ágil y
            centralizada, se agiliza la atención médica...
          </p>
        </div>

        <div className="benefit">
          <h3>Mejora la gestión administrativa:</h3>
          <p>
            El sistema incluye módulos para la gestión de citas, ventanilla
            única y otros procesos administrativos...
          </p>
        </div>

        <div className="benefit">
          <h3>Garantiza la seguridad y confidencialidad:</h3>
          <p>
            SIHCE cuenta con medidas de seguridad para proteger la información
            del paciente...
          </p>
        </div>

        <div className="benefit">
          <h3>Se integra con otros sistemas:</h3>
          <p>
            SIHCE se integra con otras aplicaciones informáticas del Ministerio
            de Salud, como HISMINSA...
          </p>
        </div>
      </section>
    </div>
  );
};

export default HistorySihce;
