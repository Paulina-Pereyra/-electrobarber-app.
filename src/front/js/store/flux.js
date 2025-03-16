const getState = ({ getStore, setStore }) => {
    return {
        actions: { // Aquí comienzan las acciones

            addToCart: (producto) => {
                const store = getStore();
                if (!store || !store.cart) {
                    console.error("Store o cart no disponible");
                    return;
                }

                // Verifica si el producto ya está en el carrito
                const productIndex = store.cart.findIndex(item => item.id === producto.id);
                console.log("Índice del producto en el carrito:", productIndex);

                if (productIndex === -1) {
                    // Si el producto no está en el carrito, lo agrega con cantidad 1
                    const updatedCart = [...store.cart, { ...producto, cantidad: 1 }];
                    setStore({ cart: updatedCart }); // Actualizamos el estado
                    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Guardamos en localStorage
                    console.log("Producto agregado al carrito:", updatedCart);
                } else {
                    // Si el producto ya está, **agrega una nueva entrada del mismo producto** (no solo incrementa la cantidad)
                    const updatedCart = [...store.cart, { ...producto, cantidad: 1 }];
                    setStore({ cart: updatedCart }); // Actualizamos el estado
                    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Guardamos en localStorage
                    console.log("Nuevo producto agregado al carrito (duplicado):", updatedCart);
                }
            },

            removeFromCart: (id) => {
                const store = getStore();
                if (!store || !store.cart) {
                    console.error("Store o cart no disponible");
                    return;
                }
                const updatedCart = store.cart.filter(producto => producto.id !== id); // Elimina el producto
                setStore({ cart: updatedCart }); // Actualiza el estado del carrito
                localStorage.setItem("cart", JSON.stringify(updatedCart)); // Guarda el carrito actualizado en localStorage
            },
            

            getTotal: () => {
                const store = getStore();
                if (!store || !store.cart) {
                    console.error("Store o cart no disponible");
                    return 0;
                }

                // Calcula el total del carrito considerando las cantidades de cada producto
                const total = store.cart.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
                console.log("Total del carrito:", total);
                return total;
            }
        }
    };
};

export default getState;
