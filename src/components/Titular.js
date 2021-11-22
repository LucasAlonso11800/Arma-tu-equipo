import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import signo from '../assets/Signo.png';
import { QUITAR_TITULAR } from '../consts/ActionTypes';

export default function Titular({ index, formacion }) {
    const { state: { titulares }, dispatch } = useContext(GlobalContext);

    const quitarTitular = (titular) => {
        return dispatch({
            type: QUITAR_TITULAR,
            payload: {
                jugador: titular
            }
        })
    };

    const handleClick = () => {
        if(titulares[index]) return quitarTitular(titulares[index]);
        return
    };

    const style = index === 0 ? { top: '46%', left: '5%' } : { ...formacion[index - 1] };
    const src = titulares[index] && titulares[index].imagen ? titulares[index].imagen : signo;
    const alt = titulares[index] ? titulares[index].nombre : `Jugador ${index}`;
    const nombreTitular = titulares[index] ? titulares[index].nombre : `Jugador ${index + 1}`;

    return (
        <div className="titular" style={style}>
            <img
                onClick={() => handleClick()}
                src={src}
                alt={alt}
                className="img-titular"
            />
            <p className="nombre-titular">{nombreTitular}</p>
        </div>
    )
};