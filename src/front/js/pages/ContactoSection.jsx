import React, { useState } from 'react';
import "../../styles/contacto.css";

export const ContactoSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que el formulario recargue la página

    const phoneNumber = "+59892943301"; // Número de WhatsApp
    const text = ` ${message}`;
    const whatsappURL = `https://wa.me/${+598092943301}?text=${encodeURIComponent(text)}`;

    // Redirige al usuario a WhatsApp
    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="contacto" className="contacto-section">
      <div className="container text-center">
        <h2>Contacto</h2>
        <p>¿Tienes alguna pregunta o deseas agendar una cita? ¡Contáctanos!</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Tu nombre" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              placeholder="Tu correo electrónico" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div className="form-group">
            <textarea 
              placeholder="Tu mensaje" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required 
            ></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};
