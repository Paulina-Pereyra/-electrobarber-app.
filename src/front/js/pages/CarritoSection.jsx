import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import { Context } from "../store/appContext"; // Usamos el contexto
import "../../styles/carrito.css";

const CarritoSection = () => {
    const { store, actions } = useContext(Context); // Accedemos al carrito y las acciones
    const navigate = useNavigate(); // Inicializa useNavigate

    const handleCheckout = () => {
        // Redirige al usuario a la página de pago
        navigate("/pago-section");
    };

    return (
        <div className="carrito-section">
            <div className="carrito-header">
                <h1>Mi Carrito</h1>
                {store.cart.length > 0 && (
                    <p>{store.cart.length} productos en tu carrito</p>
                )}
            </div>

            <div className="carrito-lista">
                {store.cart.length === 0 ? (
                    <div className="empty-cart">
                        <p>No hay productos en tu carrito.</p>
                    </div>
                ) : (
                    store.cart.map((producto) => (
                        <div key={producto.id} className="carrito-item">
                            <div className="carrito-item-img">
                                <img
                                    src={producto.imagen}
                                    alt={producto.nombre}
                                    className="img-fluid"
                                />
                            </div>
                            <div className="carrito-item-info">
                                <h3>{producto.nombre}</h3>
                                <p className="precio">${producto.precio}</p>
                                <div className="cantidad">Cantidad: {producto.cantidad}</div>
                            </div>
                            <button
                                className="btn-remove"
                                onClick={() => actions.removeFromCart(producto.id)}
                            >
                                <span className="icon-remove">🗑️</span> Eliminar
                            </button>
                        </div>
                    ))
                )}
            </div>

            {store.cart.length > 0 && (
                <div className="carrito-total">
                    <div className="total">
                        <h3>Total: ${actions.getTotal()}</h3>
                    </div>
                    <button 
                        className="btn-checkout" 
                        onClick={handleCheckout} // Usamos la función handleCheckout
                    >
                        Proceder al pago
                    </button>
                </div>
            )}
        </div>
    );
};

export default CarritoSection;
