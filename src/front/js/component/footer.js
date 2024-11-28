import React from "react";
import "../../styles/footer.css";

export const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      
      <div className="footer-links">
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>
      
      <div className="footer-contact">
        <p><strong>Teléfono:</strong> +598 093 943 301</p>
        <p><strong>Email:</strong> hernansena15@gmail.com</p>
      </div>
      
      <div className="footer-social">
        <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
      </div>
    </div>

    <div className="footer-bottom">
      <p>&copy; 2024 ElectroBarber. Todos los derechos reservados.</p>
    </div>
  </footer>
);
