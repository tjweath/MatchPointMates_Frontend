import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { currentUser } from '../../lib/CurrentUser';

export default function AddPlayer() {
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [error, setError] = useState(null);
  const [csrfToken, setCsrfToken] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const newPlayer = {
    player_name: name.trim(),
    player_country: country.trim(),
    owner: currentUser().user_id
  }

  useEffect(() => {
    // Fetch CSRF token from cookies
    const getCsrfToken = async () => {
      try {
        const response = await fetch('/csrf/');
        if (!response.ok) {
          throw new Error('Failed to fetch CSRF token');
        }
        const data = await response.json();
        setCsrfToken(data.csrfToken);
      } catch (error) {
        setError(error.message);
      }
    };
    getCsrfToken();
  }, []);

  // Placeholder onAddPlayer function
  const onAddPlayer = (newPlayer) => {
    console.log('New player added:', newPlayer);
    // You can add further logic here if needed
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form submitted');
    try {
      const token = localStorage.getItem('access_token')
      const response = await axios.post(`${process.env.REACT_APP_BACKENDURL}/players/`, newPlayer,  {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          // 'X-CSRFToken': csrfToken,
        },
    
      });
    
      navigate('/players')

    } catch (error) {
      console.error('Error occurred:', error);
      setError(error.message);
    }
  };

  return (
    <div>
      <div className="add-player-container">
        <h1 className='title'>🎾 Match Point Mates 🎾</h1>
        <div className="container">
        <h2>Add New Player</h2>
        <form className='add-player' onSubmit={handleSubmit}>
          <label>
            Player Name 
            <input
              type="text" value={name} onChange={handleNameChange}required/>
          </label>
          <br />
          <label>
            Country
            <input type="text"value={country}onChange={handleCountryChange}required/>
          </label>
          <br />
          <button type="submit">Save Player</button>
        </form>
      </div>
      {showPopup && <div className="popup">New player added!</div>}
    </div>
    </div>
  );
}