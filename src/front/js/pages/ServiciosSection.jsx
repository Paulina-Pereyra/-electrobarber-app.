import React from 'react';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import lavado from "../../img/lavado.jpg";
import barba from "../../img/barba.jpg";
import colorimetria from "../../img/colorimetria.jpg";
import corte from "../../img/corte2.jpg";
import "../../styles/ServiciosSection.css";

export const ServiciosSection = () => {
    const navigate = useNavigate();

    // Función para redirigir al usuario
    const handleRedirect = () => {
        navigate('/agendar-cita');
    };

    // JSX del componente
    return (
        <section id="services" className="services-section py-5">
            <div className="container text-center">
                <h2 style={{
                    fontWeight: "600",
                    letterSpacing: "3px",
                    color: "#F0EDEE",
                }}
                >NUESTROS SERVICIOS</h2>
                <p style={{
                    fontWeight: "600",
                    letterSpacing: "3px",
                    color: "#F0EDEE",
                }}>Disfruta de una experiencia de calidad con nuestros servicios diseñados para ti.</p>
                <div className="row">
                    <div className="col-md-3 mb-4">
                        <div className="service-card">
                            <img src={corte} alt="Cortes clásicos y modernos" className="img-fluid rounded mb-3" />
                            <h3 style={{
                                fontWeight: "600",
                                letterSpacing: "3px",
                                color: "#F0EDEE",
                            }}
                            >Cortes clásicos y modernos</h3>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="service-card">
                            <img src={lavado} alt="Lavado" className="img-fluid rounded mb-3" />
                            <h3 style={{
                                fontWeight: "600",
                                letterSpacing: "3px",
                                color: "#F0EDEE",
                            }}
                            >Lavado</h3>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="service-card">
                            <img src={barba} alt="Barba y Cejas" className="img-fluid rounded mb-3" />
                            <h3 style={{
                                fontWeight: "600",
                                letterSpacing: "3px",
                                color: "#F0EDEE",
                            }}
                            >Barba y cejas</h3>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="service-card">
                            <img src={colorimetria} alt="Colorimetría" className="img-fluid rounded mb-3" />
                            <h3 style={{
                                fontWeight: "600",
                                letterSpacing: "3px",
                                color: "#F0EDEE",
                            }}
                            >Colorimetría</h3>
                        </div>
                    </div>
                </div>
                {/* Botón centrado para todos los servicios */}
                <div className="mt-4">
                    <button
                        className="btn text-white px-4 py-2"
                        style={{ backgroundColor: "#25d366", borderColor: "#25d366" }}
                        onClick={handleRedirect}
                    >
                        AGENDAR CITA
                    </button>
                </div>

            </div>
        </section>
    );
};