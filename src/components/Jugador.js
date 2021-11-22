import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { AGREGAR_TITULAR } from '../consts/ActionTypes';

export default function Jugador({ jugador }) {
    const { state: { equipo }, dispatch } = useContext(GlobalContext);

    const agregarTitular = (jugador) => {
        return dispatch({
            type: AGREGAR_TITULAR,
            payload: { jugador }
        })
    };

    const getClassName = () => {
        if (jugador.seleccionado) {
            switch (equipo) {
                case 'la selección': return 'seleccionado seleccionado-seleccion';
                case 'River': return 'seleccionado seleccionado-river';
                case 'Boca': return 'seleccionado seleccionado-boca';
                default: return 'seleccionado'
            }
        };
        return 'jugador';
    };

    const handleClick = () => {
        if (jugador.seleccionado) return
        agregarTitular(jugador)
    };

    return (
        <div role="option" aria-selected={jugador.seleccionado} className={getClassName()} onClick={() => handleClick()}>
            <img
                src={jugador.imagen}
                className="img-jugador"
                alt={jugador.nombre}
            />
            <p className="nombre-jugador">{jugador.nombre}</p>
        </div>
    )
};