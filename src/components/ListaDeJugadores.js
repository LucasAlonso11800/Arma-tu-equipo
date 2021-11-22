import React, { useContext } from 'react';
import Jugador from './Jugador';
import { GlobalContext } from '../context/GlobalState';

export default function ListaDeJugadores() {
    const { state: { jugadores } } = useContext(GlobalContext);

    return (
        <div className="container-jugadores">
            <h2 className="titulo-lista-jugadores">Selecciona un jugador para que ingrese al equipo</h2>
            <div className="lista-jugadores">
                {jugadores.map(jugador => <Jugador jugador={jugador} key={jugador.id} />)}
            </div>
        </div>
    )
};