// Importa react y reactDOM
import React from "react";
import { createRoot } from "react-dom/client";
// Incluye tu archivo de estilos
import "../styles/index.css";

// Importa tus componentes
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from "./component/navbar.js";
import { Footer } from "./component/footer.js";
import Home from "./pages/home.js";
import AgendarCita from './component/AgendarCita.js'
import CarritoSection from './pages/CarritoSection.jsx'

// import IngresoUsuario from "./component/IngresoUsuario.js";
// import RegistroUsuario from "./component/RegistroUsuario.js";
import StoreWrapper from './store/appContext';  // Solo importa StoreWrapper, no injectContext
import { ServiciosSection } from "./pages/ServiciosSection.jsx";
import { HomeSection } from "./pages/HomeSection.jsx";
import { ContactoSection } from "./pages/ContactoSection.jsx";
import { NosotrosSection } from "./pages/NosotrosSection.jsx";
import  ProductosSection  from "./pages/ProductosSection.jsx";
import PagoSection from "./pages/PagoSection.jsx";

// Componente principal de la aplicación
const App = () => {
    return (
        <StoreWrapper>  {/* Este debe envolver al Router */}
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/agendar-cita" element={<AgendarCita />} />
                    <Route path="/carrito-section" element={<CarritoSection />} />
                    <Route path="/servicios-section" element={<ServiciosSection />} />
                    <Route path="/contacto-section" element={<ContactoSection />} />
                    <Route path="/nosotros-section" element={<NosotrosSection />} /> 
                    <Route path="/productos-section" element={<ProductosSection />} /> 
                    <Route path="/pago-section" element={<PagoSection />} /> 
                    {/* <Route path="/productos-section" element={<ProductosSection />} /> */}
                   
                </Routes>
                <Footer />
            </Router>
        </StoreWrapper>
    );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
