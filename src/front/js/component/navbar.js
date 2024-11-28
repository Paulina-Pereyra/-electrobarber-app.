import React, { useState } from "react";
import logo from "../../img/logo.png";
import "../../styles/navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo a la izquierda */}
      <div className="navbar-logo">
        <a href="#home">
          <img src={logo} alt="Logo" />
        </a>
      </div>

      {/* Título centrado */}
      <div className="navbar-title">ELECTROBARBER</div>

      {/* Menú hamburguesa */}
      <div
        className="navbar-burger"
        onClick={() => setMenuOpen((prevState) => !prevState)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Enlaces a la derecha */}
      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Inicio</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>Servicio</a>
        <a href="#nosotros" onClick={() => setMenuOpen(false)}>Nosotros</a>
        <a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a>
      </div>
    </nav>
  );
};
