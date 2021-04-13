import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [jugadores, setJugadores] = useState([])

    return (<GlobalContext.Provider
        value={[jugadores, setJugadores]}
    >
        {children}
    </GlobalContext.Provider>)
};