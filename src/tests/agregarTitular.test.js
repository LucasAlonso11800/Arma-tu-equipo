import { agregarTitular } from '../utils/agregarTitular';

describe('Funcion agregarTitular', () => {
    const payload = {
        jugador: {
            nombre: 'Armani',
            imagen: '',
            id: 1,
            seleccionado: false
        }
    };

    it('No modifica el estado si ya hay 11 titulares', () => {
        const initialState = {
            jugadores: [],
            equipo: 'la selección',
            titulares: new Array(11),
            rellenos: []
        };

        const newState = agregarTitular(initialState, payload);
        expect(newState).toEqual(initialState);
    });

    it('Añade el primer titular', () => {
        const initialState = {
            jugadores: [],
            equipo: 'la selección',
            titulares: [],
            rellenos: []
        };

        const newState = agregarTitular(initialState, payload);
        expect(newState.titulares).toEqual([payload.jugador]);
    });

    it('Añade el segundo titular', () => {
        const initialState = {
            jugadores: [],
            equipo: 'la selección',
            titulares: [payload.jugador],
            rellenos: []
        };

        const newState = agregarTitular(initialState, payload);
        expect(newState.titulares).toEqual([payload.jugador, payload.jugador]);
    });

    it('Reemplaza el primer relleno', () => {
        const relleno = { nombre: 'Jugador 3', imagen: '', id: '' };
        const initialState = {
            jugadores: [],
            equipo: 'la selección',
            titulares: [
                { nombre: 'Andrada', imagen: '', id: 2, seleccionado: true },
                { nombre: 'E. Martinez', imagen: '', id: 3, seleccionado: true },
                relleno,
                { nombre: 'Otamendi', imagen: '', id: 4, seleccionado: true },
            ],
            rellenos: [relleno]
        };

        const newState = agregarTitular(initialState, payload);

        expect(newState.rellenos).toEqual([]);
        expect(newState.titulares).toEqual([
            { nombre: 'Andrada', imagen: '', id: 2, seleccionado: true },
            { nombre: 'E. Martinez', imagen: '', id: 3, seleccionado: true },
            { nombre: 'Armani', imagen: '', id: 1, seleccionado: true },
            { nombre: 'Otamendi', imagen: '', id: 4, seleccionado: true }
        ]);
    });
});