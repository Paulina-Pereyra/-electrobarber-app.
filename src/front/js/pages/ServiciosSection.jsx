import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import lavado from "../../img/lavado.jpg";
import barba from "../../img/barba.jpg";
import colorimetria from "../../img/colorimetria.jpg";
import corte from "../../img/corte2.jpg";
import "../../styles/ServiciosSection.css";

export const ServiciosSection = () => {
    const navigate = useNavigate();

    // Estado para el modal
    const [modalInfo, setModalInfo] = useState({ show: false, title: '', price: '', details: '' });

    // Función para mostrar el modal con la información del servicio
    const handleShowModal = (title, price, details) => {
        setModalInfo({ show: true, title, price, details });
    };

    // Función para cerrar el modal
    const handleCloseModal = () => {
        setModalInfo({ ...modalInfo, show: false });
    };

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
                        <div className="service-card" onClick={() => handleShowModal('Cortes clásicos y modernos', '$20', 'Incluye estilos clásicos y modernos adaptados a tu personalidad.')}>
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
                        <div className="service-card" onClick={() => handleShowModal('Lavado', '$10', 'Servicio de lavado con productos de alta calidad.')}>
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
                        <div className="service-card" onClick={() => handleShowModal('Barba y cejas', '$15', 'Arreglo de barba y diseño de cejas para un look perfecto.')}>
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
                        <div className="service-card" onClick={() => handleShowModal('Colorimetría', '$30', 'Servicio de coloración profesional para tu cabello.')}>
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
                <div className="mt-4">
                    <button
                        className="btn text-white px-4 py-2"
                        style={{ backgroundColor: "#25d366", borderColor: "#25d366" }}
                        onClick={() => navigate('/agendar-cita')}
                    >
                        AGENDAR CITA
                    </button>
                </div>
            </div>

            {/* Modal */}
            {modalInfo.show && (
                <div className="modal-overlay">
                    <div className="modal-container">
                        <button className="modal-close" onClick={handleCloseModal}>&times;</button>
                        <h2 className="modal-title">{modalInfo.title}</h2>
                        <p className="modal-price"><strong>Precio:</strong> {modalInfo.price}</p>
                        <p className="modal-details">{modalInfo.details}</p>
                    </div>
                </div>
            )}
        </section>
    );
};
