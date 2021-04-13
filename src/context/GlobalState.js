import React, { createContext, useState } from 'react';
import { jugadoresSeleccion } from '../components/Jugadores'

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [jugadores, setJugadores] = useState(jugadoresSeleccion);
    const [titulares, setTitulares] = useState([]);
    const [equipo, setEquipo] = useState('la seleccion')

    return (<GlobalContext.Provider
        value={{jugadores, setJugadores, titulares, setTitulares, equipo, setEquipo}}
    >
        {children}
    </GlobalContext.Provider>)
};