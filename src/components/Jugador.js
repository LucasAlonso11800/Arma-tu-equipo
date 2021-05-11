import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function Jugador({ jugador }) {
    const { titulares, setTitulares, equipo } = useContext(GlobalContext);
    const rellenos = titulares.filter(jugador => jugador.id === '');

    function agregarTitular(jugador) {
        const losTitularesEstanCompletos = titulares.length === 11;
        const hayRellenos = rellenos.length > 0;
        
        if(losTitularesEstanCompletos && !hayRellenos) return;

        jugador.seleccionado = true;
        
        if (titulares.length === 0) setTitulares([jugador]);

        if(!losTitularesEstanCompletos && !hayRellenos) setTitulares([...titulares, jugador]);

        if (hayRellenos) {
            const index = titulares.indexOf(rellenos[0]);
            const nuevosTitulares = titulares.valueOf();
            nuevosTitulares.splice(index, 1, jugador);
            setTitulares([...nuevosTitulares]);
            rellenos.shift();
        };
    };

    return (
        <div className={
            jugador.seleccionado && equipo === 'la seleccion' ? 'seleccionado seleccionado-seleccion' :
                jugador.seleccionado && equipo === 'River' ? 'seleccionado seleccionado-river' :
                    jugador.seleccionado && equipo === 'Boca' ? 'seleccionado seleccionado-boca' :
                        'jugador'}
            onClick={jugador.seleccionado ? () => { } : () => agregarTitular(jugador)}
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
