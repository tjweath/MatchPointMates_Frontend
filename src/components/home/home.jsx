import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './home.css';

const Home = () => {
    const [playerData, setPlayerData] = useState(null);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKENDURL}/api/get_player_data/`)
            .then(response => {
                console.log(response.data);
                setPlayerData(response.data); 
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); 

    console.log('Player Data:', playerData);

    return (
        <div className='page'>
            <div className='text'>
                <div className='homepage'/>
                <h1 className='title'>🎾 Match Point Mates 🎾</h1>
                <div className='copy'>
                    {playerData ? (
                        playerData.result.map((player, idx) => (
                            <div key={idx}>
                            <p>Player Name: {player.player_name}</p>
                            <p>Player Country: {player.player_country}</p>
                            <img src={player.player_logo} />
                        </div>
                        ))
                        
                    ) : (
                        <p>Loading player data...</p>
                    )}
                    <p>Welcome to Match Point Mates, your ultimate destination for connecting and following your favorite tennis players. This is your go-to platform for staying updated, engaged, and inspired by the world of professional tennis.</p>
                    <p>At Match Point Mates, we understand the passion and dedication fans have for their favorite players. That's why we've created a seamless and personalized experience that allows you to follow every match, every victory, and every milestone of your tennis idols. Say goodbye to endless scrolling through news feeds and social media updates; with Match Point Mates, everything you need to know about your favorite players is just a click away.</p>
                    <p>From player profiles and career statistics to live match updates and exclusive interviews, we've got you covered with everything you need to stay informed and engaged with the tennis world.</p>
                    <p>Let's serve up some excitement and make every match point count together!</p>
                </div>
            </div>
        </div>
    );
};

export default Home;


