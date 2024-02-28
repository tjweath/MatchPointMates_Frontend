import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EditPlayer.css';

function EditPlayer() {
  const { playerId } = useParams();
  const navigate = useNavigate();
  const [player, setPlayer] = useState({ player_name: '', player_country: '' }); // Initialize player state with empty values
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPlayer = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:8000/players/${playerId}/`);
        setPlayer(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching player:', error);
        setLoading(false);
      }
    };

    fetchPlayer();
  }, [playerId]);

  const handleInputChange = (e) => {
    setPlayer(prevPlayer => ({
      ...prevPlayer,
      [e.target.name]: e.target.value
    }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted');
    setLoading(true);
    try {
      await axios.put(`http://localhost:8000/players/${playerId}/`, player);
      console.log('Player data:', player);
      setLoading(false);
      navigate(`/players/${playerId}`);
    } catch (error) {
      console.error('Error updating player:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

return (
  <div className="container">
    <h1>Edit Player</h1>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="player_name" className="form-label">Player Name </label>
        <input type="text" id="player_name" name="player_name" value={player.player_name || ''} onChange={handleInputChange} className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="player_country" className="form-label">Country </label>
        <input type="text" id="player_country" name="player_country" value={player.player_country || ''} onChange={handleInputChange} className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">Save</button>
    </form>
  </div>
);
}

export default EditPlayer;
