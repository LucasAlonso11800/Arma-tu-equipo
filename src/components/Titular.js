import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import signo from '../assets/Signo.png';
import { QUITAR_TITULAR } from '../consts/ActionTypes';

function Titular({ index, formacion }) {
    const { state: { titulares }, dispatch } = useContext(GlobalContext);

    const quitarTitular = (titular) => {
        return dispatch({
            type: QUITAR_TITULAR,
            payload: {
                jugador: titular,
                signo
            }
        })
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