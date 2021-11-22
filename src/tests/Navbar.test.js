import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { GlobalContext } from '../context/GlobalState';
import App from '../App';

describe('Navbar', () => {
    it('Navbar cambia el equipo al hacer click', () => {
        const { getByText } = render(
            <GlobalContext.Provider>
                <App />
            </GlobalContext.Provider>
        );
        
        const botonRiver = getByText('River');
        const botonBoca = getByText('Boca');
        const botonSeleccion = getByText('Selección Argentina');

        const title = getByText(/como deberia formar/i);
        expect(title.textContent).toBe('Como deberia formar la selección para el proximo partido?');

        userEvent.click(botonRiver)
        expect(title.textContent).toBe('Como deberia formar River para el proximo partido?');
        
        userEvent.click(botonBoca)
        expect(title.textContent).toBe('Como deberia formar Boca para el proximo partido?');

        userEvent.click(botonSeleccion)
        expect(title.textContent).toBe('Como deberia formar la selección para el proximo partido?');
    });
});