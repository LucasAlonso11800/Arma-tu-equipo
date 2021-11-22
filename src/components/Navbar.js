import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { jugadoresSeleccion, jugadoresRiver, jugadoresBoca } from '../consts/Jugadores';
import { CAMBIAR_EQUIPO } from '../consts/ActionTypes';

export default function Navbar() {
    const { dispatch } = useContext(GlobalContext);

    const handleClick = (jugadores, equipo) => {
        return dispatch({
            type: CAMBIAR_EQUIPO,
            payload: {
                todosLosJugadores: [...jugadoresSeleccion, ...jugadoresRiver, ...jugadoresBoca],
                jugadores,
                equipo
            }
        })
    };

    return (
        <header className="navbar">
            <h2 className="titulo-navbar">Arma tu equipo</h2>
            <ul className="lista">
                <li className="item-lista" onClick={() => handleClick(jugadoresSeleccion, 'la selección')}>Selección Argentina</li>
                <li className="item-lista" onClick={() => handleClick(jugadoresRiver, 'River')}>River</li>
                <li className="item-lista" onClick={() => handleClick(jugadoresBoca, 'Boca')}>Boca</li>
            </ul>
        </header>
    )
};