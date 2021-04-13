import React, { useContext } from 'react';
import Jugador from './Jugador';

import { GlobalContext } from '../context/GlobalState';

function ListaDeJugadores() {
    const [jugadores, setJugadores] = useContext(GlobalContext);

    return (
        <div className="container-jugadores">
            <div className="titulo-lista-jugadores">
                <h3>Selecciona un jugador para que ingrese al equipo</h3>
            </div>
            <div className="lista-jugadores">
                {jugadores.map(jugador => {
                    return <Jugador jugador={jugador} key={jugador.id} />
                })}
            </div>
        </div>
    )
};

export default ListaDeJugadores
