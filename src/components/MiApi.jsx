import React, { useEffect, useState } from "react";

const MiApi = ({ terminoBusqueda }) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const consultarApi = async () => {
      try {
        const response = await fetch(
          "https://nba-stats-db.herokuapp.com/api/playerdata/topscorers/total/season/2022/"
        );
        const data = await response.json();

        // Filtra los resultados según el término de búsqueda en el nombre y equipo
        const resultadosFiltrados = (data.results || []).filter(
          (player) =>
            // Verifica si player.player_name y player.team no son undefined antes de aplicar toLowerCase
            (player?.player_name &&
              player?.player_name
                .toLowerCase()
                .includes(terminoBusqueda.toLowerCase())) ||
            (player?.team &&
              player?.team
                .toLowerCase()
                .includes(terminoBusqueda.toLowerCase()))
        );

        // Ordena los resultados alfabéticamente por el nombre del jugador
        resultadosFiltrados.sort((a, b) =>
          a?.player_name?.localeCompare(b?.player_name)
        );

        setInfo(resultadosFiltrados);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };

    consultarApi();
  }, [terminoBusqueda]);

  return (
    <div className="miapi-container">
      <h2>Tabla de Datos</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>Nombre del Jugador</th>
            <th>Juegos</th>
            <th>Equipo</th>
            <th>Puntos</th>
          </tr>
        </thead>
        <tbody>
          {info.map((player) => (
            <tr key={player.id}>
              <td>{player?.player_name}</td>
              <td>{player?.games}</td>
              <td>{player?.team}</td>
              <td>{player?.PTS}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MiApi;
