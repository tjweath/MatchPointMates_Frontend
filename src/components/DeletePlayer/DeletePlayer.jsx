import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import './DeletePlayer.css';

function DeletePlayer() {
  const { playerId } = useParams(); 
  const navigate = useNavigate(); 
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('access_token');
      await axios.delete(`${process.env.REACT_APP_BACKENDURL}/players/${playerId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setLoading(false);
      navigate('/players'); 
    } catch (error) {
      console.error('Error deleting player:', error);
      setLoading(false);
    }
  };

  return (
    <div>
      <div className='delete'>
      <h1>Delete Player</h1>
      <p>Are you sure you want to delete this player?</p>
      <button onClick={handleDelete} disabled={loading}>
        {loading ? 'Deleting...' : 'Delete'}
      </button>
      </div>
    </div>
  );
}

export default DeletePlayer;
