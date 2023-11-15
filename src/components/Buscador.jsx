import React, { useState, useEffect } from 'react';
import MiApi from './MiApi';

const Buscador = () => {
    const [busqueda, setBusqueda] = useState('');
  
    const handleInputChange = (event) => {
      setBusqueda(event.target.value);
    };
  
    return (
      <div className="buscador-container">
        <h2>Buscador</h2>
        <input
          type="text"
          placeholder="Buscar por nombre o equipo..."
          value={busqueda}
          onChange={handleInputChange}
          className="search-input"
        />
        {/* Pasa el término de búsqueda como prop al componente MiApi */}
        <MiApi terminoBusqueda={busqueda} />
      </div>
    );
  };
  
  export default Buscador;
