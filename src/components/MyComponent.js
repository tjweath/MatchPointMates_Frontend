import React, { useEffect } from 'react';
import fetchData from '../api'; // Adjust the path as needed

const MyComponent = () => {
    useEffect(() => {
        fetchData().then(data => {
            // Do something with the data
        }).catch(error => {
            // Handle error
        });
    }, []);
    return (
        <div>
            {/* Your component JSX */}
        </div>
    );
};
export default MyComponent;