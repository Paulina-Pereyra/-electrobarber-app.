import React, { useState, useContext } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import Swal from 'sweetalert2';
import { auth } from '../../../../src/firebase.js'; // Importa la configuración de Firebase
import "../../styles/ingresousuario.css";
import { FaEnvelope, FaLock } from 'react-icons/fa'; // Importar iconos
import { Context } from "../store/appContext"; // Importar el contexto para las acciones de autenticación

const IngresoUsuario = () => {
  const { actions } = useContext(Context); // Usar acciones desde el contexto

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      Swal.fire({
        icon: 'error',
        title: 'Campos vacíos',
        text: 'Por favor, completa todos los campos.',
      });
      return;
    }

    console.log('Datos enviados:', { email, password });

    // Lógica de autenticación aquí, por ejemplo, llamar a Firebase o una API
    Swal.fire({
      icon: 'success',
      title: 'Ingreso exitoso',
      text: '¡Bienvenido de nuevo!',
    });

    // Aquí puedes añadir la lógica para autenticar al usuario, por ejemplo:
    const user = { name: "Usuario Ejemplo" }; // Este sería el usuario autenticado
    actions.login(user); // Llamar a la acción de login del contexto
  };

  // Función para iniciar sesión con Google
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider(); // Crear el proveedor de Google
    try {
      // Usar el método signInWithPopup para abrir la ventana emergente
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Usuario logueado con Google:', user);

      // Actualizar el contexto con los datos del usuario autenticado
      actions.login(user);

      Swal.fire({
        icon: 'success',
        title: 'Ingreso exitoso',
        text: `¡Bienvenido ${user.displayName}!`,
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Error al iniciar sesión',
        text: error.message,
      });
    }
  };

  return (
    <div className="form-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Ingresar</button>
      </form>
      <hr />
      <div className="alternative-login">
        <p>O </p>
        <button className="google-btn" onClick={handleGoogleLogin}>
          Iniciar sesión con Google
        </button>
      </div>
    </div>
  );
};

export default IngresoUsuario;
