import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import axios from 'axios';

function DeletePlayer() {
  const { playerId } = useParams(); 
  const navigate = useNavigate(); 
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`${process.env.REACT_APP_BACKENDURL}/players/${playerId}`);
      setLoading(false);
      navigate('/players'); 
    } catch (error) {
      console.error('Error deleting player:', error);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Delete Player</h1>
      <p>Are you sure you want to delete this player?</p>
      <button onClick={handleDelete} disabled={loading}>
        {loading ? 'Deleting...' : 'Delete'}
      </button>
    </div>
  );
}

export default DeletePlayer;
