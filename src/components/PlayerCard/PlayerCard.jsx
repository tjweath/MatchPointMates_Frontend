import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PlayerCard.css';

const PlayerCard = ({ playerId }) => {
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKENDURL}/players/${playerId}`)
      .then(response => {
        setPlayer(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching player data:', error);
        setLoading(false);
      });
  }, [playerId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!player) {
    return <div>Error: Failed to fetch player data</div>;
  }

  return (
    <div className="player-card">
      <h2>{player.player_name}</h2>
      <p>{player.player_country}</p>
    </div>
  );
};

export default PlayerCard;
