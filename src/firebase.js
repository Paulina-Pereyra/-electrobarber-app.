// Importar las funciones que necesitas de Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // Agrega esta línea para autenticación
import { getAnalytics } from "firebase/analytics";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDO2qTgL9tA2iSG2wZDrBlWXp035JdTXb8",
  authDomain: "electrobarber-efe16.firebaseapp.com",
  projectId: "electrobarber-efe16",
  storageBucket: "electrobarber-efe16.firebasestorage.app",
  messagingSenderId: "694558679800",
  appId: "1:694558679800:web:26e7ce139b1c31f9c1910d",
  measurementId: "G-RB93J477DN"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar la autenticación
const auth = getAuth(app);

// Inicializar Analytics (si lo usas)
const analytics = getAnalytics(app);

// Exportar el objeto `auth` para usarlo en otros archivos
export { auth };
