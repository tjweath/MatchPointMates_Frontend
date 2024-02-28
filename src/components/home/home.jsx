import React, { useEffect } from 'react';
import axios from 'axios';
import './home.css';

const Home = () => {
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKENDURL}/home/`)
            .then(response => {
                console.log(response.data);
                // Do something with the data, e.g., set state
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                // Handle error
            });
    }, []);

    return (
        <div>
            <div className='homepage'/>
            <h1 className='title'>🎾 Match Point Mates 🎾</h1>
            <p>This is the home page. User not logged in</p>
        </div>
    );
};

export default Home;

