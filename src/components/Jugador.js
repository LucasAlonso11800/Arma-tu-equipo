import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function Jugador({ jugador }) {
    const { jugadores, setJugadores, titulares, setTitulares } = useContext(GlobalContext);

    function agregarTitular(jugador) {
        if (titulares.length <= 11) {
            setTitulares(...titulares, jugador)
            setJugadores(jugadores.filter(j => j.id !== jugador.id))
        };
    };

    return (
        <div className="jugador"
            onClick={() => agregarTitular(jugador)}
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
