export const cambiarEquipo = (payload) => {
    const { jugadores, equipo, todosLosJugadores } = payload;

    todosLosJugadores.forEach(jugador => jugador.seleccionado = false);

    return {
        jugadores,
        titulares: [],
        equipo,
        rellenos: []
    }
};