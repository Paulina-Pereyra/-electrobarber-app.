import React, { useState, useContext, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Context } from "../store/appContext"; // Usamos el contexto para obtener el carrito
import "../../styles/navbar.css";
import "../../img/logo.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { store } = useContext(Context); // Usamos el contexto para obtener el carrito
  const location = useLocation();
  const navigate = useNavigate();

  const sectionRefs = useRef({});

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleScrollToSection = (sectionId) => {
    // Si no estamos en la página de carrito, navegamos directamente a la sección
    if (location.pathname !== '/carrito-section') {
      navigate(`/carrito-section#${sectionId}`);
    } else {
      // Si estamos en la página de carrito, desplazamos suavemente a la sección
      sectionRefs.current[sectionId].current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isCarritoPage = location.pathname === '/carrito-section';

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {isCarritoPage ? (
          <Link to="/home">
            <img src="logo.png" alt="Logo" />
          </Link>
        ) : (
          <a onClick={() => handleScrollToSection("home")}>
            <img src="logo.png" alt="Logo" />
          </a>
        )}
      </div>

      {/* Contenedor para el título animado */}
      <div className="navbar-title-container">
        <div className="marquee-container">
          <div className="animated-title">
            ELECTROBARBER 
          </div>
        </div>
      </div>

      <div className="navbar-burger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        {isCarritoPage ? (
          <>
            <Link to="/home" onClick={() => navigate("/home")}>Inicio</Link>
            <Link to="/servicios-section" onClick={() =>("servicios")}>Servicios</Link>
            <Link to="/nosotros-section" onClick={() => ("nosotros")}>Nosotros</Link>
            <Link to="/contacto-section" onClick={() => ("contacto")}>Contacto</Link>
            <Link to="/productos-section" onClick={() =>("productos")}>Productos</Link>
          </>
        ) : (
          <>
            <a onClick={() => handleScrollToSection("home")}>Inicio</a>
            <a onClick={() => handleScrollToSection("services")}>Servicios</a>
            <a onClick={() => handleScrollToSection("nosotros")}>Nosotros</a>
            <a onClick={() => handleScrollToSection("contacto")}>Contacto</a>
            <a onClick={() => handleScrollToSection("productos")}>Productos</a>
          </>
        )}

        {/* Carrito con ícono y contador */}
        <div className="navbar-cart">
          <Link to="/carrito-section">
            <i className="fas fa-shopping-cart"></i> {/* Ícono de carrito */}
            {/* Mostrar el número de productos en el carrito */}
            {store.cart.length > 0 && (
              <span className="cart-count">{store.cart.length}</span> // Muestra la cantidad de productos
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};
