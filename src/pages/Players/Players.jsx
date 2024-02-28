import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Players.css'

function Players() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKENDURL}/players/`)
      .then(response => {
        const reversedPlayers = response.data.reverse();
        setPlayers(reversedPlayers);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching players:', error);
        setLoading(false);
      });
  }, []);
  

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='players'>
      <h1 className='title'>Match Point Mates</h1>
      <div className='players-container'>
        {players.map(player => (
          <Link key={player.id} to={`/players/${player.id}`} className='player-link'>
            <div className='player-item'>
              <div><strong>Player:</strong> {player.player_name}</div>
              <div><strong>Country:</strong> {player.player_country}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
  
}
export default Players;








