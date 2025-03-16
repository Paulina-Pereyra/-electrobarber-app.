import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/productos.css";
import producto1 from "../../img/producto1.jpg";
import producto2 from "../../img/producto2.jpg";
import producto3 from "../../img/producto3.jpg";
import producto4 from "../../img/producto4.jpg";
import producto5 from "../../img/producto5.jpg";
import producto6 from "../../img/producto6.jpg";
import producto7 from "../../img/producto7.jpg";
import producto8 from "../../img/producto8.jpg";
import producto9 from "../../img/producto9.jpg";
import producto10 from "../../img/producto10.jpg";
import producto11 from "../../img/producto11.jpg";
import producto12 from "../../img/producto12.jpg";
import producto13 from "../../img/producto13.jpg";


const Productos = () => {
    const { store, actions } = useContext(Context); // Acceder al store y a las actions

    const listaProductos = [
        {
            id: 1,
            nombre: "Cera gel modelador",
            descripcion: "Hidrata y suaviza tu cabello.",
            precio: 150,
            imagen: producto1, // Usa la imagen importada
        },
        {
            id: 2,
            nombre: "Cera matte",
            descripcion: "Limpieza profunda y aroma fresco.",
            precio: 120,
            imagen: producto2, // Usa la imagen importada
        },
        {
            id: 3,
            nombre: "Capas",
            descripcion: "Fijación fuerte y estilo natural.",
            precio: 200,
            imagen: producto3, // Usa la imagen importada
        },
        {
            id: 4,
            nombre: "Máscara para rubios y decoloración",
            descripcion: "Suavidad y brillo para tu cabello.",
            precio: 180,
            imagen: producto4, // Usa la imagen importada
        },
        {
            id: 5,
            nombre: "Aceite para barba",
            descripcion: "Frescura y limpieza diaria.",
            precio: 100,
            imagen: producto5, // Usa la imagen importada
        },
        {
            id: 6,
            nombre: "Peines anti frizz",
            descripcion: "Frescura y limpieza diaria.",
            precio: 100,
            imagen: producto6, // Usa la imagen importada
        },
        {
            id: 7,
            nombre: "Cera para cabello extra fuerte",
            descripcion: "Frescura y limpieza diaria.",
            precio: 100,
            imagen: producto7, // Usa la imagen importada
        },
        {
            id: 8,
            nombre: "Concentrado de keratina",
            descripcion: "Frescura y limpieza diaria.",
            precio: 100,
            imagen: producto8, // Usa la imagen importada
        },
        {
            id: 9,
            nombre: "Peine",
            descripcion: "Frescura y limpieza diaria.",
            precio: 100,
            imagen: producto9, // Usa la imagen importada
        },
        {
            id: 10,
            nombre: "Gorra para mechas",
            descripcion: "Frescura y limpieza diaria.",
            precio: 100,
            imagen: producto10, // Usa la imagen importada
        },
        {
            id: 11,
            nombre: "Gel de ducha",
            descripcion: "Frescura y limpieza diaria.",
            precio: 100,
            imagen: producto11, // Usa la imagen importada
        },
        {
            id: 12,
            nombre: "Guantes negros",
            descripcion: "Frescura y limpieza diaria.",
            precio: 100,
            imagen: producto12, // Usa la imagen importada
        },
        {
            id: 13,
            nombre: "Shock de keratina para rubios",
            descripcion: "Frescura y limpieza diaria.",
            precio: 100,
            imagen: producto13, // Usa la imagen importada
        },
    ];
    

    return (
        <section id="productos" className="productos-container">
            <h1 className="productos-titulo">Productos Disponibles</h1>
            <div className="productos-lista">
                {listaProductos.map((producto) => (
                    <div key={producto.id} className="producto-card">
                        <img
                            src={producto.imagen}
                            alt={producto.nombre}
                            className="producto-imagen"
                        />
                        <h2 className="producto-nombre">{producto.nombre}</h2>
                        <p className="producto-descripcion">{producto.descripcion}</p>
                        <p className="producto-precio">${producto.precio}</p>
                        <button
                            className="producto-boton"
                            onClick={() => {
                                console.log(actions); // Esto te ayudará a ver qué tiene actions
                                actions.addToCart(producto);
                            }}
                        >
                            Agregar al carrito
                        </button>


                    </div>
                ))}
            </div>
        </section>
    );
};

export default Productos;
