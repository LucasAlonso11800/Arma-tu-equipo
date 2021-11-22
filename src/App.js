import './App.css';
import './MediaQuerys.css'

import Navbar from './components/Navbar';
import Titulo from './components/Titulo';
import ListaDeJugadores from './components/ListaDeJugadores';
import Cancha from './components/Cancha';

import { GlobalProvider } from './context/GlobalState';

export default function App() {
    return (
        <GlobalProvider>
            <Navbar />
            <main className="container">
                <Titulo />
                <ListaDeJugadores />
                <Cancha />
            </main>
        </GlobalProvider>
    )
};