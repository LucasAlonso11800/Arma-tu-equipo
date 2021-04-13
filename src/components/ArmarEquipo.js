import React from 'react'
import ListaDeJugadores from './ListaDeJugadores';
import Cancha from './Cancha';

function ArmarEquipo() {
    return (
        <div className="container">
            <Cancha />
            <ListaDeJugadores />
        </div>
    )
};

export default ArmarEquipo
