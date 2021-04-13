import React from 'react';
import Jugador from './Jugador';

function ListaDeJugadores() {
    const jugadores = []
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
