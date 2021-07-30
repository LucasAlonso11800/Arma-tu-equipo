import React, { useContext } from 'react';
import Jugador from './Jugador';
import { GlobalContext } from '../context/GlobalState';

function ListaDeJugadores() {
    const { state } = useContext(GlobalContext);

    return (
        <div className="container-jugadores">
            <h2 className="titulo-lista-jugadores">Selecciona un jugador para que ingrese al equipo</h2>
            <div className="lista-jugadores">
                {state.jugadores.map(jugador => {
                    return <Jugador jugador={jugador} key={jugador.id} />
                })}
            </div>
        </div>
    )
};

export default ListaDeJugadores
