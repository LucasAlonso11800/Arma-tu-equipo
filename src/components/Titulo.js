import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function Titulo() {
    const { equipo } = useContext(GlobalContext)
    return (
        <h1 className="titulo">Como deberia formar {equipo} para el proximo partido?</h1>
    )
};

export default Titulo
