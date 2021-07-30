export const agregarTitular = (state, payload) => {
    const { titulares, rellenos } = state;
    const { jugador } = payload;

    const losTitularesEstanCompletos = titulares.length === 11;
    const hayRellenos = rellenos.length > 0;

    if (losTitularesEstanCompletos && !hayRellenos) return state
    jugador.seleccionado = true;

    if (titulares.length === 0) return { ...state, titulares: [jugador] }
    if (!losTitularesEstanCompletos && !hayRellenos) return { ...state, titulares: [...titulares, jugador] }

    if (hayRellenos) {
        const index = titulares.indexOf(rellenos[0]);
        const nuevosTitulares = titulares.valueOf();
        nuevosTitulares[index] = jugador;
        const nuevosRellenos = rellenos.slice(1);

        return {
            ...state,
            titulares: nuevosTitulares,
            rellenos: nuevosRellenos
        }
    };
};