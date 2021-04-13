import React, { useContext, useState } from 'react';
import signo from '../assets/Signo.png';
import { formacionUno, formacionDos, formacionTres, formacionCuatro, formacionCinco, formacionSeis } from './Formaciones';

import { GlobalContext } from '../context/GlobalState';

function Cancha() {
    const { jugadores, titulares } = useContext(GlobalContext);
    const [formacion, setFormacion] = useState(formacionUno);

    return (
        <div className="cancha">
            <div className="formaciones">
                <h3>Elegi tu formacion</h3>
                <ul className="lista-formaciones">
                    <li className='formacion' onClick={() => setFormacion(formacionUno)}>4-4-2</li>
                    <li className='formacion' onClick={() => setFormacion(formacionDos)}>4-3-1-2</li>
                    <li className='formacion' onClick={() => setFormacion(formacionTres)}>4-2-3-1</li>
                    <li className='formacion' onClick={() => setFormacion(formacionCuatro)}>4-3-3</li>
                    <li className='formacion' onClick={() => setFormacion(formacionCinco)}>3-4-3</li>
                    <li className='formacion' onClick={() => setFormacion(formacionSeis)}>3-5-2</li>
                </ul>
            </div>
            <div className="img-cancha">
                <div className="titular" style={{ top: '46%', left: '5%' }}>
                    <img src={titulares[0] ? titulares[0].imagen : signo} alt={titulares[0] ? titulares[0].nombre : 'Jugador 1'}
                        className="img-titular"
                    />
                    <p className="nombre-titular">{titulares[0] ? titulares[0].nombre : 'Jugador 1'}</p>
                </div>
                <div className="titular" style={{ top: formacion[0].top, left: formacion[0].left }}>
                    <img src={titulares[1] ? titulares[1].imagen : signo} alt={titulares[1] ? titulares[1].nombre : 'Jugador 1'} className="img-titular" />
                    <p className="nombre-titular">{titulares[1] ? titulares[1].nombre : 'Jugador 2'}</p>
                </div>
                <div className="titular" style={{ top: formacion[1].top, left: formacion[1].left }}>
                    <img src={titulares[2] ? titulares[2].imagen : signo} alt={titulares[2] ? titulares[2].nombre : 'Jugador 1'} className="img-titular" />
                    <p className="nombre-titular">{titulares[2] ? titulares[2].nombre : 'Jugador 3'}</p>
                </div>
                <div className="titular" style={{ top: formacion[2].top, left: formacion[2].left }}>
                    <img src={titulares[3] ? titulares[3].imagen : signo} alt={titulares[3] ? titulares[3].nombre : 'Jugador 1'} className="img-titular" />
                    <p className="nombre-titular">{titulares[3] ? titulares[3].nombre : 'Jugador 4'}</p>
                </div>
                <div className="titular" style={{ top: formacion[3].top, left: formacion[3].left }}>
                    <img src={titulares[4] ? titulares[4].imagen : signo} alt={titulares[4] ? titulares[4].nombre : 'Jugador 1'} className="img-titular" />
                    <p className="nombre-titular">{titulares[4] ? titulares[4].nombre : 'Jugador 5'}</p>
                </div>
                <div className="titular" style={{ top: formacion[4].top, left: formacion[4].left }}>
                    <img src={titulares[5] ? titulares[5].imagen : signo} alt={titulares[5] ? titulares[5].nombre : 'Jugador 1'} className="img-titular" />
                    <p className="nombre-titular">{titulares[5] ? titulares[5].nombre : 'Jugador 6'}</p>
                </div>
                <div className="titular" style={{ top: formacion[5].top, left: formacion[5].left }}>
                    <img src={titulares[6] ? titulares[6].imagen : signo} alt={titulares[6] ? titulares[6].nombre : 'Jugador 1'} className="img-titular" />
                    <p className="nombre-titular">{titulares[6] ? titulares[6].nombre : 'Jugador 7'}</p>
                </div>
                <div className="titular" style={{ top: formacion[6].top, left: formacion[6].left }}>
                    <img src={titulares[7] ? titulares[7].imagen : signo} alt={titulares[7] ? titulares[7].nombre : 'Jugador 1'} className="img-titular" />
                    <p className="nombre-titular">{titulares[7] ? titulares[7].nombre : 'Jugador 8'}</p>
                </div>
                <div className="titular" style={{ top: formacion[7].top, left: formacion[7].left }}>
                    <img src={titulares[8] ? titulares[8].imagen : signo} alt={titulares[8] ? titulares[8].nombre : 'Jugador 1'} className="img-titular" />
                    <p className="nombre-titular">{titulares[8] ? titulares[8].nombre : 'Jugador 9'}</p>
                </div>
                <div className="titular" style={{ top: formacion[8].top, left: formacion[8].left }}>
                    <img src={titulares[9] ? titulares[9].imagen : signo} alt={titulares[9] ? titulares[9].nombre : 'Jugador 1'} className="img-titular" />
                    <p className="nombre-titular">{titulares[9] ? titulares[9].nombre : 'Jugador 10'}</p>
                </div>
                <div className="titular" style={{ top: formacion[9].top, left: formacion[9].left }}>
                    <img src={titulares[10] ? titulares[10].imagen : signo} alt={titulares[10] ? titulares[10].nombre : 'Jugador 1'} className="img-titular" />
                    <p className="nombre-titular">{titulares[10] ? titulares[10].nombre : 'Jugador 11'}</p>
                </div>
            </div>
        </div>
    )

};

export default Cancha;