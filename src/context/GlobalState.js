import React, { createContext, useState } from 'react';
import { jugadoresSeleccion } from '../components/Jugadores'

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [jugadores, setJugadores] = useState(jugadoresSeleccion);
    const [titulares, setTitulares] = useState([]);

    return (<GlobalContext.Provider
        value={{jugadores, setJugadores, titulares, setTitulares}}
    >
        {children}
    </GlobalContext.Provider>)
};