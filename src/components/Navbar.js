import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { jugadoresSeleccion, jugadoresRiver, jugadoresBoca } from './Jugadores';

function Navbar() {
    const {setJugadores, setTitulares, setEquipo} = useContext(GlobalContext);

    function cambiarEquipo(equipo) {
        setJugadores(equipo);
        setTitulares([]);
        if(equipo === jugadoresSeleccion) return setEquipo('la seleccion');
        if(equipo === jugadoresRiver) return setEquipo('River');
        if(equipo === jugadoresBoca) return setEquipo('Boca');
    };

    return (
        <div className="navbar">
            <h2>Arma tu equipo</h2>
            <ul className="lista">
                <li className="item-lista" onClick={() => cambiarEquipo(jugadoresSeleccion)}>Seleccion Argentina</li>
                <li className="item-lista" onClick={() => cambiarEquipo(jugadoresRiver)}>River</li>
                <li className="item-lista" onClick={() => cambiarEquipo(jugadoresBoca)}>Boca</li>
            </ul>
        </div>
    )
}

export default Navbar
