import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Players.css'

function Players() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8000/players/')
      .then(response => {
        setPlayers(response.data.reverse());
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








