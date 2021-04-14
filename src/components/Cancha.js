import React, { useContext, useState } from 'react';
import signo from '../assets/Signo.png';
import { formacionUno, formacionDos, formacionTres, formacionCuatro, formacionCinco, formacionSeis, formacionSiete, formacionOcho } from './Formaciones';

import { GlobalContext } from '../context/GlobalState';

function Cancha() {
    const { jugadores, titulares, setTitulares } = useContext(GlobalContext);
    const [formacion, setFormacion] = useState(formacionUno);

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
            if(indexJugadores !== -1){
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
        <div className="cancha">
            <div className="formaciones">
                <h2>Elegi tu formacion</h2>
                <ul className="lista-formaciones">
                    <li className='formacion' onClick={() => setFormacion(formacionUno)}>4-4-2</li>
                    <li className='formacion' onClick={() => setFormacion(formacionDos)}>4-3-1-2</li>
                    <li className='formacion' onClick={() => setFormacion(formacionTres)}>4-2-3-1</li>
                    <li className='formacion' onClick={() => setFormacion(formacionCuatro)}>4-3-3</li>
                    <li className='formacion' onClick={() => setFormacion(formacionCinco)}>3-4-3</li>
                    <li className='formacion' onClick={() => setFormacion(formacionSeis)}>3-5-2</li>
                    <li className='formacion' onClick={() => setFormacion(formacionSiete)}>3-3-1-3</li>
                    <li className='formacion' onClick={() => setFormacion(formacionOcho)}>5-4-1</li>
                </ul>
            </div>
            <div className="img-cancha">
                <div className="titular" style={{ top: '46%', left: '5%' }}>
                    <img
                        onClick={titulares[0] ? () => quitarTitular(titulares[0]) : () => { }}
                        src={titulares[0] ? titulares[0].imagen : signo}
                        alt={titulares[0] ? titulares[0].nombre : 'Jugador 1'}
                        className="img-titular"
                    />
                    <p className="nombre-titular">{titulares[0] ? titulares[0].nombre : 'Jugador 1'}</p>
                </div>
                <div className="titular" style={{ top: formacion[0].top, left: formacion[0].left }}>
                    <img
                        onClick={titulares[1] ? () => quitarTitular(titulares[1]) : () => { }}
                        src={titulares[1] ? titulares[1].imagen : signo}
                        alt={titulares[1] ? titulares[1].nombre : 'Jugador 1'}
                        className="img-titular" />
                    <p className="nombre-titular">{titulares[1] ? titulares[1].nombre : 'Jugador 2'}</p>
                </div>
                <div className="titular" style={{ top: formacion[1].top, left: formacion[1].left }}>
                    <img
                        onClick={titulares[2] ? () => quitarTitular(titulares[2]) : () => { }}
                        src={titulares[2] ? titulares[2].imagen : signo}
                        alt={titulares[2] ? titulares[2].nombre : 'Jugador 1'}
                        className="img-titular" />
                    <p className="nombre-titular">{titulares[2] ? titulares[2].nombre : 'Jugador 3'}</p>
                </div>
                <div className="titular" style={{ top: formacion[2].top, left: formacion[2].left }}>
                    <img
                        onClick={titulares[3] ? () => quitarTitular(titulares[3]) : () => { }}
                        src={titulares[3] ? titulares[3].imagen : signo}
                        alt={titulares[3] ? titulares[3].nombre : 'Jugador 1'}
                        className="img-titular" />
                    <p className="nombre-titular">{titulares[3] ? titulares[3].nombre : 'Jugador 4'}</p>
                </div>
                <div className="titular" style={{ top: formacion[3].top, left: formacion[3].left }}>
                    <img
                        onClick={titulares[4] ? () => quitarTitular(titulares[4]) : () => { }}
                        src={titulares[4] ? titulares[4].imagen : signo}
                        alt={titulares[4] ? titulares[4].nombre : 'Jugador 1'}
                        className="img-titular" />
                    <p className="nombre-titular">{titulares[4] ? titulares[4].nombre : 'Jugador 5'}</p>
                </div>
                <div className="titular" style={{ top: formacion[4].top, left: formacion[4].left }}>
                    <img
                        onClick={titulares[5] ? () => quitarTitular(titulares[5]) : () => { }}
                        src={titulares[5] ? titulares[5].imagen : signo}
                        alt={titulares[5] ? titulares[5].nombre : 'Jugador 1'}
                        className="img-titular" />
                    <p className="nombre-titular">{titulares[5] ? titulares[5].nombre : 'Jugador 6'}</p>
                </div>
                <div className="titular" style={{ top: formacion[5].top, left: formacion[5].left }}>
                    <img
                        onClick={titulares[6] ? () => quitarTitular(titulares[6]) : () => { }}
                        src={titulares[6] ? titulares[6].imagen : signo}
                        alt={titulares[6] ? titulares[6].nombre : 'Jugador 1'}
                        className="img-titular" />
                    <p className="nombre-titular">{titulares[6] ? titulares[6].nombre : 'Jugador 7'}</p>
                </div>
                <div className="titular" style={{ top: formacion[6].top, left: formacion[6].left }}>
                    <img
                        onClick={titulares[7] ? () => quitarTitular(titulares[7]) : () => { }}
                        src={titulares[7] ? titulares[7].imagen : signo}
                        alt={titulares[7] ? titulares[7].nombre : 'Jugador 1'}
                        className="img-titular" />
                    <p className="nombre-titular">{titulares[7] ? titulares[7].nombre : 'Jugador 8'}</p>
                </div>
                <div className="titular" style={{ top: formacion[7].top, left: formacion[7].left }}>
                    <img
                        onClick={titulares[8] ? () => quitarTitular(titulares[8]) : () => { }}
                        src={titulares[8] ? titulares[8].imagen : signo}
                        alt={titulares[8] ? titulares[8].nombre : 'Jugador 1'}
                        className="img-titular" />
                    <p className="nombre-titular">{titulares[8] ? titulares[8].nombre : 'Jugador 9'}</p>
                </div>
                <div className="titular" style={{ top: formacion[8].top, left: formacion[8].left }}>
                    <img
                        onClick={titulares[9] ? () => quitarTitular(titulares[9]) : () => { }}
                        src={titulares[9] ? titulares[9].imagen : signo}
                        alt={titulares[9] ? titulares[9].nombre : 'Jugador 1'}
                        className="img-titular" />
                    <p className="nombre-titular">{titulares[9] ? titulares[9].nombre : 'Jugador 10'}</p>
                </div>
                <div className="titular" style={{ top: formacion[9].top, left: formacion[9].left }}>
                    <img
                        onClick={titulares[10] ? () => quitarTitular(titulares[10]) : () => { }}
                        src={titulares[10] ? titulares[10].imagen : signo}
                        alt={titulares[10] ? titulares[10].nombre : 'Jugador 1'}
                        className="img-titular" />
                    <p className="nombre-titular">{titulares[10] ? titulares[10].nombre : 'Jugador 11'}</p>
                </div>
            </div>
        </div>
    )

};

export default Cancha;