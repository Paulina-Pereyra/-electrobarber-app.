import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/pago.css";

const PagoSection = () => {
    const { store, actions } = useContext(Context); // Accedemos al carrito y las acciones

    // Maneja la lógica de pago al hacer clic en el botón
    const handlePago = () => {
        // Aquí podrías crear una preferencia de pago dinámica con los datos del carrito
        const paymentUrl = "https://link.mercadopago.com.uy/electrobarber"; // Aquí debes poner el link generado o preferencia dinámica
        window.open(paymentUrl, "_blank"); // Abre el enlace de MercadoPago en una nueva ventana
    };

    return (
        <div className="pago-section">
            <div className="pago-header">
                <h1>Resumen de tu Pedido</h1>
                <p>Confirma tus datos antes de proceder al pago.</p>
            </div>

            {/* Resumen del carrito de compras */}
            <div className="pago-resumen">
                {store.cart.length === 0 ? (
                    <div className="empty-cart">
                        <p>No hay productos en tu carrito para pagar.</p>
                    </div>
                ) : (
                    store.cart.map((producto) => (
                        <div key={producto.id} className="pago-item">
                            <div className="pago-item-img">
                                <img
                                    src={producto.imagen}
                                    alt={producto.nombre}
                                    className="img-fluid"
                                />
                            </div>
                            <div className="pago-item-info">
                                <h3>{producto.nombre}</h3>
                                <p>Cantidad: {producto.cantidad}</p>
                                <p>${producto.precio}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Muestra el total del carrito */}
            <div className="pago-total">
                <h3>Total: ${actions.getTotal()}</h3>
            </div>

            {/* Formulario de pago */}
            <div className="pago-form">
                <h3>Detalles de pago</h3>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Nombre Completo" required />
                    <input type="email" placeholder="Correo Electrónico" required />
                    <input type="text" placeholder="Dirección de Envío" required />
                    <button type="button" onClick={handlePago} className="btn-pagar">
                        Pagar Ahora
                    </button>
                </form>
            </div>

            {/* Botón para regresar al carrito */}
            <div className="btn-regresar">
                <button
                    onClick={() => window.history.back()}
                    className="btn-back"
                >
                    Regresar al Carrito
                </button>
            </div>
        </div>
    );
};

export default PagoSection;
