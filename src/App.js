import './App.css';

import Navbar from './components/Navbar';
import Titulo from './components/Titulo';
import ArmarEquipo from './components/ArmarEquipo';

function App() {
    return (
        <div className="background">
            <Navbar />
            <Titulo />
            <ArmarEquipo />
        </div>
    )
};

export default App;