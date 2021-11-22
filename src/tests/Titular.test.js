import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { GlobalContext } from '../context/GlobalState';
import App from '../App';

describe('Titular', () => {
    it('Se puede quitar jugador del equipo titular', () => {
        const { getAllByRole, getAllByAltText } = render(
            <GlobalContext.Provider>
                <App />
            </GlobalContext.Provider>
        );

        const jugador = getAllByRole('option')[0];
        userEvent.click(jugador);
        
        const titulares = getAllByAltText('Armani');
        userEvent.click(titulares[1]);

        const nuevosTitulares = getAllByAltText('Armani');
        expect(nuevosTitulares.length).toBe(1);
    });
});