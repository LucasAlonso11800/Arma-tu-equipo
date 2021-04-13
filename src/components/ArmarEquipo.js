import React from 'react'
import ListaDeJugadores from './ListaDeJugadores';
import Cancha from './Cancha';

function ArmarEquipo() {
    return (
        <div className="container">
            <ListaDeJugadores />
            <Cancha />
        </div>
    )
};

export default ArmarEquipo
