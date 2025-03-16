import React, { createContext, useState, useEffect } from "react";
import getState from "./flux";

export const Context = createContext();

const StoreWrapper = ({ children }) => {
    const [store, setStore] = useState({
        cart: [] // Inicializa el carrito vacío
    });

    const actions = getState({ 
        getStore: () => store, 
        setStore: (updatedStore) => setStore({
            ...store, 
            ...updatedStore 
        })
    }).actions;

    useEffect(() => {
        // Cargar carrito desde localStorage al inicio
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            setStore((prevStore) => ({
                ...prevStore,
                cart: JSON.parse(savedCart)
            }));
        }
    }, []);

    return (
        <Context.Provider value={{ store, actions }}>
            {children}
        </Context.Provider>
    );
};

export default StoreWrapper;
