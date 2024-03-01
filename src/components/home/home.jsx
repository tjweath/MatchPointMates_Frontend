// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './home.css';

// const Home = () => {
//     const [playerData, setPlayerData] = useState(null);

//     useEffect(() => {
//         const fetchPlayerData = async () => {
//             try {
//                 const response1 = await axios.get(`${process.env.REACT_APP_BACKENDURL}/api/get_player_data/1905`);
//                 const response2 = await axios.get(`${process.env.REACT_APP_BACKENDURL}/api/get_player_data/1910`);
//                 setPlayerData({ player1: response1.data, player2: response2.data }); 
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchPlayerData();
//     }, []); 

//     console.log('Player Data:', playerData);

//     return (
//         <div className='page'>
//             <div className='text'>
//                 <div className='homepage'/>
//                 <h1 className='title'>🎾 Match Point Mates 🎾</h1>
//                 <div className='copy'>
//                     {playerData && playerData.player1 && playerData.player2 ? (
//                         <>
//                             <div>
//                                 <h2>Player 1</h2>
//                                 {playerData.player1.result.map((player, idx) => (
//                                     <div key={idx}>
//                                         <p>{player.player_name} | {player.player_country}</p>
//                                         <img src={player.player_logo} alt="Player Logo"/>
//                                     </div>
//                                 ))}
//                             </div>
//                             <div>
//                                 <h2>Player 2</h2>
//                                 {playerData.player2.result.map((player, idx) => (
//                                     <div key={idx}>
//                                         <p>{player.player_name} | {player.player_country}</p>
//                                         <img src={player.player_logo} alt="Player Logo"/>
//                                     </div>
//                                 ))}
//                             </div>
//                         </>
//                     ) : (
//                         <p>Loading player data...</p>
//                     )}
//                     <p>Welcome to Match Point Mates, your ultimate destination for connecting and following your favorite tennis players. This is your go-to platform for staying updated, engaged, and inspired by the world of professional tennis.</p>
//                     <p>At Match Point Mates, we understand the passion and dedication fans have for their favorite players. That's why we've created a seamless and personalized experience that allows you to follow every match, every victory, and every milestone of your tennis idols. Say goodbye to endless scrolling through news feeds and social media updates; with Match Point Mates, everything you need to know about your favorite players is just a click away.</p>
//                     <p>From player profiles and career statistics to live match updates and exclusive interviews, we've got you covered with everything you need to stay informed and engaged with the tennis world.</p>
//                     <p>Let's serve up some excitement and make every match point count together!</p>
//                 </div>
//             </div>
//         </div>
//     );
    
//                     }
// export default Home;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './home.css';

const Home = () => {
    const [playerData, setPlayerData] = useState({ player1: null, player2: null });

    useEffect(() => {
        const fetchPlayerData = async () => {
            try {
                const response1 = await axios.get(`${process.env.REACT_APP_BACKENDURL}/api/get_player_data/1905`);
                const response2 = await axios.get(`${process.env.REACT_APP_BACKENDURL}/api/get_player_data/1910`);
                setPlayerData({ player1: response1.data, player2: response2.data }); 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchPlayerData();
    }, []); 

    console.log('Player Data:', playerData);

    return (
        <div className='page'>
            <div className='text'>
                <div className='homepage'/>
                <h1 className='title'>🎾 Match Point Mates 🎾</h1>
                <div className='copy'>
                    {playerData.player1 && playerData.player2 ? (
                        <div className="player-container">
                            <div className="player">
                                <h2>World Number 1</h2>
                                {playerData.player1.result.map((player, idx) => (
                                    <div key={idx}>
                                        <p>{player.player_name} | {player.player_country}</p>
                                        <img src={player.player_logo} alt="Player Logo"/>
                                    </div>
                                ))}
                            </div>
                            <div className="player">
                                <h2>World Number 1</h2>
                                {playerData.player2.result.map((player, idx) => (
                                    <div key={idx}>
                                        <p>{player.player_name} | {player.player_country}</p>
                                        <img src={player.player_logo} alt="Player Logo"/>
                                    </div>
                                ))}
                            </div>
                        </div>
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


