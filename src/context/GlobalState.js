import React, { createContext, useReducer } from 'react';
// Const
import { jugadoresSeleccion } from '../consts/Jugadores'
import { CAMBIAR_EQUIPO, AGREGAR_TITULAR, QUITAR_TITULAR } from '../consts/ActionTypes';
// Funciones
import { cambiarEquipo } from '../utils/cambiarEquipo';
import { agregarTitular } from '../utils/agregarTitular';
import { quitarTitular } from '../utils/quitarTitular';

export const GlobalContext = createContext();

const initialState = {
    jugadores: jugadoresSeleccion,
    titulares: [],
    equipo: 'la seleccion',
    rellenos: []
};

function reducer(state, action) {
    switch (action.type) {
        case CAMBIAR_EQUIPO: return cambiarEquipo(action.payload)
        case AGREGAR_TITULAR: return agregarTitular(state, action.payload)
        case QUITAR_TITULAR: return quitarTitular(state, action.payload)
        default: return state
    }
};

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <GlobalContext.Provider value={{ state, dispatch }}>
        {children}
    </GlobalContext.Provider>
};