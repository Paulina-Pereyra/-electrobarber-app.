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
// import IngresoUsuario from "./component/IngresoUsuario.js";
// import RegistroUsuario from "./component/RegistroUsuario.js";
import StoreWrapper from './store/appContext';  // Solo importa StoreWrapper, no injectContext

// Componente principal de la aplicación
const App = () => {
    return (
        <StoreWrapper>  {/* Este debe envolver al Router */}
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/agendar-cita" element={<AgendarCita />} />
                    {/* <Route path="/ingreso-usuario" element={<IngresoUsuario />} />
                    <Route path="/registro-usuario" element={<RegistroUsuario />} /> */}
                </Routes>
                <Footer />
            </Router>
        </StoreWrapper>
    );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
