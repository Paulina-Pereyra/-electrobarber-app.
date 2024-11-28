import React, { useState, useEffect } from "react";
import getState from "./flux";

// Crea el contexto
export const Context = React.createContext(null);

// StoreWrapper envuelve el componente y gestiona el estado global
const StoreWrapper = (props) => {
    const [state, setState] = useState(getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: (updatedStore) =>
            setState({
                store: { ...state.store, ...updatedStore },
                actions: { ...state.actions }
            })
    }));

    useEffect(() => {
        // Guarda en localStorage cada vez que el estado cambie
        localStorage.setItem('isAuthenticated', JSON.stringify(state.store.isAuthenticated));
        localStorage.setItem('user', JSON.stringify(state.store.user));
    }, [state.store]);

    return (
        <Context.Provider value={state}>
            {props.children} {/* Usa children para permitir pasar cualquier componente */}
        </Context.Provider>
    );
};

export default StoreWrapper;

