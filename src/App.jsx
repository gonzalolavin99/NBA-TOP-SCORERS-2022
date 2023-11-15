import React from 'react';
import Buscador from './components/Buscador';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>NBA Top Scorers</h1>
        {/* Puedes agregar más elementos al navbar según sea necesario */}
        <nav>
          <a href="#">Inicio</a>
          <a href="#">Sobre nosotros</a>
          <a href="#">Contacto</a>
        </nav>
      </header>
      <main>
        <Buscador />
      </main>
      <footer>
        <p>&copy; 2023 NBA Stats</p>
      </footer>
    </div>
  );
}

export default App;
