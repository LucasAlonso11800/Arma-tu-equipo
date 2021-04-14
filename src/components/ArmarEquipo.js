import React from 'react'
import ListaDeJugadores from './ListaDeJugadores';
import Cancha from './Cancha';

function ArmarEquipo() {
    return (
        <main className="container">
            <ListaDeJugadores />
            <Cancha />
        </main>
    )
};

export default ArmarEquipo
