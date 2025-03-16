import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import "bootstrap/dist/css/bootstrap.min.css";


//componentes nuevos
// import { HomeSection} from "./pages/HomeSection.jsx";
// import { ServiciosSection} from "./pages/ServiciosSection.jsx";
// import {AgendarCita} from "./component/AgendarCita.js";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { ServiciosSection } from "./pages/ServiciosSection";
import { HomeSection } from "./pages/HomeSection";
import { AgendarCita } from "./component/AgendarCita";
// import {IngresoUsuario} from "./component/IngresoUsuario";
import { NosotrosSection } from "./pages/NosotrosSection";
import { Contacto } from "./pages/ContactoSection";
import { Productos } from "./pages/ProductosSection.jsx"
import { CarritoSection } from "./pages/CarritoSection.jsx"
import { PagoSection } from "./pages/PagoSection.jsx"




//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>

                    <Routes>

                        <Route element={<Home />} path="/" />
                        <Route element={<Navbar />} path="/navbar" />
                        <Route element={<HomeSection />} path="/home-section" />
                        <Route element={<ServiciosSection />} path="/servicios-section" />
                        <Route element={<AgendarCita />} path="/agendar-cita" />
                        {/* <Route element={<IngresoUsuario />} path="/ingreso-usuario" /> */}
                        <Route element={<NosotrosSection />} path="/nosotros-section" />
                        <Route element={<Contacto />} path="/contacto-section" />
                        <Route element={<Productos />} path="/productos-section" />
                        <Route element={<CarritoSection />} path="/carrito-section" />
                        <Route element={<PagoSection />} path="/pago-section" />

                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} path="*" />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
