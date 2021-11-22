import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { GlobalContext } from '../context/GlobalState';
import App from '../App';

describe('Jugador', () => {
    it('Se puede añadir jugador al equipo titular', () => {
        const { getAllByRole, getByText } = render(
            <GlobalContext.Provider>
                <App />
            </GlobalContext.Provider>
        );

        const jugador = getAllByRole('option')[0];
        const primerTitular = getByText('Jugador 1');

        userEvent.click(jugador);
        expect(jugador.className).toBe('seleccionado seleccionado-seleccion');
        expect(primerTitular.textContent).toBe('Armani');
    });
});