import React, { useState } from 'react';
import { formacionUno, formacionDos, formacionTres, formacionCuatro, formacionCinco, formacionSeis, formacionSiete, formacionOcho } from './Formaciones';
import Titular from './Titular';
import html2canvas from 'html2canvas';

function Cancha() {
    const [formacion, setFormacion] = useState(formacionUno);

    function guardar(canvas) {
        let a = document.createElement('a');
        a.href = canvas.toDataURL();
        a.download = 'TuEquipo.png';
        a.click()
    };

    function divAImagen(div) {
        html2canvas(div, {scrollY: -window.scrollY}).then(canvas => guardar(canvas))
    }

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
            <div className="img-cancha" id="cancha">
                <Titular index={0} formacion={formacion}/>
                <Titular index={1} formacion={formacion}/>
                <Titular index={2} formacion={formacion}/>
                <Titular index={3} formacion={formacion}/>
                <Titular index={4} formacion={formacion}/>
                <Titular index={5} formacion={formacion}/>
                <Titular index={6} formacion={formacion}/>
                <Titular index={7} formacion={formacion}/>
                <Titular index={8} formacion={formacion}/>
                <Titular index={9} formacion={formacion}/>
                <Titular index={10} formacion={formacion}/>
            </div>
            <button className="btn-descarga" onClick={() => divAImagen(document.querySelector('#cancha'))}>
                    Descargar
            </button>
        </div>
    )

};

export default Cancha;