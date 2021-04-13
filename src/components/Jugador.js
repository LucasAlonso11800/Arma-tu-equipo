import React from 'react';

function Jugador({ jugador }) {
    return (
        <div className="jugador">
            <img src={jugador.imagen} className="img-jugador" alt={jugador.nombre}/>
            <p className="nombre-jugador">{jugador.nombre}</p>
        </div>
    )
};

export default Jugador
