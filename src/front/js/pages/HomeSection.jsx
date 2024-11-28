import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import foto6 from "../../img/foto6.jpg";
import foto5 from "../../img/foto5.jpg";
import foto3 from "../../img/foto3.jpg";
import "../../styles/homesection.css";

export const HomeSection = () => {
  return (
    <section id="home"
      className="home-section py-5"
      style={{ backgroundColor: "#F0EDEE" }}  // Estilo en línea para el fondo
    >
      <div className="container">
        {/* Texto de bienvenida */}
        <div className="text-center mb-5">
          <h1 className="text-heading">El lugar donde no solo nos ocupamos de la</h1>
          <h2 className="text-subheading">CALIDAD DEL CORTE</h2>
          <h1 className="text-heading">Sino que también nos ocupamos de la</h1>
          <h2 className="text-subheading">CALIDAD DE ATENCIÓN</h2>
        </div>

        {/* Carrusel */}
        <div id="photoCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={foto6} className="carousel-image" alt="Foto 1" />
            </div>
            <div className="carousel-item">
              <img src={foto5} className="carousel-image" alt="Foto 2" />
            </div>
            <div className="carousel-item">
              <img src={foto3} className="carousel-image" alt="Foto 3" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#photoCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#photoCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </div>
    </section>
  );
};
