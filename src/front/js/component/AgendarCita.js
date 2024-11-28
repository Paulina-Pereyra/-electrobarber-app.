
import React from 'react';
import '../../styles/agendarcita.css';

const AgendarCita = () => {
    return (
      <div className="agendar-cita-container">  {/* Aplica la clase aquí */}
        <h2>Agendar Cita</h2>
        <p>Selecciona una fecha y hora para tu cita con el barbero.</p>
  
        <iframe
          src="https://calendly.com/hernansena15/barberia"  // Usa el enlace que obtuviste de Calendly
          width="100%"
          height="800px"
          frameBorder="0"
          title="Calendly"
        ></iframe>
      </div>
    );
  };
  
  export default AgendarCita;
