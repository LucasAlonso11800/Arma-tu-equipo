export const quitarTitular = (state, payload) => {
    const { titulares, rellenos, jugadores } = state;
    const { jugador, signo } = payload;

    const indexTitulares = titulares.indexOf(jugador);
    const indexJugadores = jugadores.indexOf(jugador);
    const esTitular = indexJugadores !== -1;
    const esElUltimoTitularSeleccionado = indexTitulares === titulares.length - 1;

    if (esTitular) {
        jugadores[indexJugadores].seleccionado = false;
        if (esElUltimoTitularSeleccionado) return { ...state, titulares: titulares.filter(j => j.id !== jugador.id) }
        if (!esElUltimoTitularSeleccionado) {
            const nuevosTitulares = titulares.filter(j => j.id !== jugador.id);
            nuevosTitulares.splice(indexTitulares, 0, {
                nombre: `Jugador ${(indexTitulares + 1)}`,
                imagen: signo,
                id: '',
            });
            return {
                ...state,
                titulares: nuevosTitulares,
                rellenos: [...rellenos, nuevosTitulares[indexTitulares]].sort((a, b) => parseInt(a.nombre.substring(8)) - parseInt(b.nombre.substring(8)))
            }
        }
    };
    return state
};