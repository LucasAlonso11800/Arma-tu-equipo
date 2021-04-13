import './App.css';

import Navbar from './components/Navbar';
import Titulo from './components/Titulo';
import ArmarEquipo from './components/ArmarEquipo';

import { GlobalProvider } from './context/GlobalState';

function App() {
    return (
        <div className="background">
            <GlobalProvider>
                <Navbar />
                <Titulo />
                <ArmarEquipo />
            </GlobalProvider>
        </div>
    )
};

export default App;