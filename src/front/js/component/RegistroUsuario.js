import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'; // Importar las funciones necesarias
import { auth } from '../../../../src/firebase.js'; // Importar la configuración de Firebase
import "../../styles/registrousuario.css"; // Estilos opcionales
import { FaEnvelope, FaLock } from "react-icons/fa";


const RegistroUsuario = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Función para manejar el registro con correo electrónico y contraseña
  const handleEmailRegister = async (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      Swal.fire({
        icon: 'error',
        title: 'Campos vacíos',
        text: 'Por favor, completa todos los campos.',
      });
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Swal.fire({
        icon: 'success',
        title: 'Registro exitoso',
        text: `Bienvenido, ${email}!`,
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Error al registrar',
        text: error.message,
      });
    }
  };

  // Función para iniciar sesión con Google
  const handleGoogleRegister = async () => {
    const provider = new GoogleAuthProvider(); // Crear el proveedor de Google
    try {
      // Usar el método signInWithPopup para abrir la ventana emergente
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Usuario registrado con Google:', user);
      Swal.fire({
        icon: 'success',
        title: 'Registro exitoso',
        text: `¡Bienvenido ${user.displayName}!`,
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Error al registrar',
        text: error.message,
      });
    }
  };

  return (
    <div className="form-container">
      <h2>Regístrate</h2>
      <form onSubmit={handleEmailRegister}>
        <div className="input-group">
        <span className="icon"><FaEnvelope /></span> {/* Icono de correo */}
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
        <span className="icon"><FaLock /></span> {/* Icono de candado */}
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
      <hr />
      <div className="alternative-login">
        <p>O regístrate con:</p>
        {/* Llamar a handleGoogleRegister cuando se hace click en el botón de Google */}
        <button className="google-btn" onClick={handleGoogleRegister}>
          Registrarse con Google
        </button>
      
      </div>
    </div>
  );
};

export default RegistroUsuario;
