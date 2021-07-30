import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { jugadoresSeleccion, jugadoresRiver, jugadoresBoca } from '../consts/Jugadores';
import { CAMBIAR_EQUIPO } from '../consts/ActionTypes';

function Navbar() {
    const { dispatch } = useContext(GlobalContext);

    const cambiarEquipo = (jugadores, equipo) => {
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
                <li className="item-lista" onClick={() => cambiarEquipo(jugadoresSeleccion, 'la seleccion')}>Seleccion Argentina</li>
                <li className="item-lista" onClick={() => cambiarEquipo(jugadoresRiver, 'River')}>River</li>
                <li className="item-lista" onClick={() => cambiarEquipo(jugadoresBoca, 'Boca')}>Boca</li>
            </ul>
        </header>
    )
}

export default Navbar
