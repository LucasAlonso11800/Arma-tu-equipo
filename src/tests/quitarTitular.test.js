import { quitarTitular } from '../utils/quitarTitular';

describe('Funcion quitarTitular', () => {
    const payload = {
        jugador: {
            nombre: 'Armani',
            imagen: '',
            id: 1,
            seleccionado: true
        }
    };

    it('No modifica el estado si el jugador seleccionado no es titular', () => {
        const initialState = {
            jugadores: [],
            equipo: 'la selección',
            titulares: [{ nombre: 'Andrada', imagen: '', id: 2, seleccionado: true }],
            rellenos: []
        };

        const newState = quitarTitular(initialState, payload);
        expect(newState).toEqual(initialState);
    });

    it('Remueve el ultimo titular', () => {
        const titulares = new Array(10).fill({ id: '' });
        const initialState = {
            jugadores: [payload.jugador],
            equipo: 'la selección',
            titulares: titulares.concat(payload.jugador),
            rellenos: []
        };

        const newState = quitarTitular(initialState, payload);
        expect(newState).toEqual({ ...initialState, titulares });
    });

    it('Remueve titular y añade un relleno', () => {
        const titulares = new Array(5).fill({ id: '' }).concat(payload.jugador).concat(new Array(5).fill({ id: '' }));
        const relleno = { nombre: 'Jugador 6', imagen: null, id: '' };

        const initialState = {
            jugadores: [payload.jugador],
            equipo: 'la selección',
            titulares,
            rellenos: []
        };

        const newState = quitarTitular(initialState, payload);
        expect(newState).toEqual({
            ...initialState,
            titulares: new Array(5).fill({ id: '' }).concat(relleno).concat(new Array(5).fill({ id: '' })),
            rellenos: [relleno]
        });
    });
});