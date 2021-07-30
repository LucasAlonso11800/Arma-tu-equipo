import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { AGREGAR_TITULAR } from '../consts/ActionTypes';

function Jugador({ jugador }) {
    const { state, dispatch } = useContext(GlobalContext);

    const agregarTitular = (jugador) => {
        return dispatch({
            type: AGREGAR_TITULAR,
            payload: { jugador }
        })
    };

    return (
        <div className={
            jugador.seleccionado && state.equipo === 'la seleccion' ? 'seleccionado seleccionado-seleccion' :
                jugador.seleccionado && state.equipo === 'River' ? 'seleccionado seleccionado-river' :
                    jugador.seleccionado && state.equipo === 'Boca' ? 'seleccionado seleccionado-boca' :
                        'jugador'}
            onClick={jugador.seleccionado ? () => { } : () => agregarTitular(jugador)}
        >
            <img src={jugador.imagen}
                className="img-jugador"
                alt={jugador.nombre}
            />
            <p className="nombre-jugador">{jugador.nombre}</p>
        </div>
    )
};

export default Jugador
