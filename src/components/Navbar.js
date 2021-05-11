import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { jugadoresSeleccion, jugadoresRiver, jugadoresBoca } from './Jugadores';

function Navbar() {
    const {setJugadores, setTitulares, setEquipo} = useContext(GlobalContext);
    const todosLosJugadores = [...jugadoresSeleccion, ...jugadoresRiver, ...jugadoresBoca];
    
    function cambiarEquipo(equipo) {
        setJugadores(equipo);
        setTitulares([]);
        todosLosJugadores.forEach(jugador => jugador.seleccionado = false);
        
        if(equipo === jugadoresSeleccion) setEquipo('la seleccion');
        if(equipo === jugadoresRiver) setEquipo('River');
        if(equipo === jugadoresBoca) setEquipo('Boca');
    };

    return (
        <header className="navbar">
            <h2 className="titulo-navbar">Arma tu equipo</h2>
            <ul className="lista">
                <li className="item-lista" onClick={() => cambiarEquipo(jugadoresSeleccion)}>Seleccion Argentina</li>
                <li className="item-lista" onClick={() => cambiarEquipo(jugadoresRiver)}>River</li>
                <li className="item-lista" onClick={() => cambiarEquipo(jugadoresBoca)}>Boca</li>
            </ul>
        </header>
    )
}

export default Navbar
