import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function Jugador({ jugador }) {
    const { titulares, setTitulares } = useContext(GlobalContext);
    const rellenos = titulares.filter(jugador => jugador.id === '');

    function agregarTitular(jugador) {
        if(titulares.length === 0){
            jugador.seleccionado = true
            setTitulares([jugador])
        }
        else if(titulares.length > 0 && titulares.length < 11){
            jugador.seleccionado = true
            if(rellenos.length > 0){
                const index = titulares.indexOf(rellenos[0]);
                const nuevosTitulares = titulares;
                nuevosTitulares.splice(index, 1, jugador);
                setTitulares([...nuevosTitulares]);
                rellenos.shift();
            }
            else {
                setTitulares([...titulares, jugador])
            }
        }
        else if(titulares.length === 11){
            jugador.seleccionado = true
            if(rellenos.length > 0){
                const index = titulares.indexOf(rellenos[0]);
                const nuevosTitulares = titulares;
                nuevosTitulares.splice(index, 1, jugador);
                setTitulares([...nuevosTitulares]);
                rellenos.shift();
            }
        }
    };

    return (
        <div className={jugador.seleccionado ? 'seleccionado' : 'jugador'}
            onClick={jugador.seleccionado ? () => {} : () => agregarTitular(jugador) }
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
