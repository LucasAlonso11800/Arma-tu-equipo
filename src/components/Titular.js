import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import signo from '../assets/Signo.png';

function Titular({ index, formacion }) {
    const { jugadores, titulares, setTitulares } = useContext(GlobalContext);

    function quitarTitular(jugador) {
        const index = titulares.indexOf(jugador);
        const indexJugadores = jugadores.indexOf(jugador);

        if (index === titulares.length - 1) {
            if (indexJugadores !== -1) {
                jugadores[indexJugadores].seleccionado = false;
                setTitulares(titulares.filter(j => j.id !== jugador.id));
            }
        }
        else if (index < titulares.length - 1) {
            if (indexJugadores !== -1) {
                jugadores[indexJugadores].seleccionado = false;
                const nuevosTitulares = titulares.filter(j => j.id !== jugador.id);
                nuevosTitulares.splice(index, 0, {
                    nombre: `Jugador ${(index + 1)}`,
                    imagen: signo,
                    id: '',
                });
                setTitulares(nuevosTitulares);
            }
        }
    };
    return (
        <div className="titular" style={index === 0 ? { top: '46%', left: '5%' } : { top: formacion[index - 1].top, left: formacion[index - 1].left }}>
            <img
                onClick={titulares[index] ? () => quitarTitular(titulares[index]) : () => { }}
                src={titulares[index] ? titulares[index].imagen : signo}
                alt={titulares[index] ? titulares[index].nombre : `Jugador ${index}`}
                className="img-titular"
            />
            <p className="nombre-titular">{titulares[index] ? titulares[index].nombre : `Jugador ${index + 1}`}</p>
        </div>
    )
};

export default Titular;