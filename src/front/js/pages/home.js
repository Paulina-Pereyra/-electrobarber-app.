import React from 'react';
import { HomeSection } from './HomeSection.jsx';  // Asegúrate de que importes todos los componentes necesarios
import { ServiciosSection } from './ServiciosSection.jsx';
import { NosotrosSection } from './NosotrosSection.jsx';
import { ContactoSection } from './ContactoSection.jsx';


const Home = () => {
    return (
        <div>
            <HomeSection />
            <ServiciosSection />
            <NosotrosSection/>
            <ContactoSection/>
        </div>
    );
};

export default Home;
