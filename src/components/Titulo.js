import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export default function Titulo() {
    const { state: { equipo } } = useContext(GlobalContext);

    return <h1 className="titulo">Como deberia formar {equipo} para el proximo partido?</h1>
};