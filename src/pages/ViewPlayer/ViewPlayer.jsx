import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import PlayerCard from '../../components/PlayerCard/PlayerCard.jsx'; // Assuming PlayerCard is in the same directory

export default function ViewPlayer() {
  const { playerId } = useParams();
  console.log("Player ID:", playerId);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:8000/players/${playerId}`)
      .then(response => {
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching player details:', error);
        setLoading(false);
      });
  }, [playerId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className='title'>🎾 Match Point Mates 🎾</h1>
      
      <div className='playerdetails'>
      <h2>Player Details</h2>
      <PlayerCard playerId={playerId} />
      <div>
        <Link to={`/update-player/${playerId}`}><button>Edit</button></Link>
        <Link to={`/delete-player/${playerId}`}><button>Delete</button></Link>
      </div>
      </div>
    </div>
  );
}
