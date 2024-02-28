import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import Home from './components/home/home.jsx';
import Players from './pages/Players/Players.jsx';
import ViewPlayer from './pages/ViewPlayer/ViewPlayer.jsx';
import AddPlayer from './pages/AddPlayer/AddPlayer.jsx';
import EditPlayerPage from './pages/EditPlayerPage/EditPlayerPage.jsx';
import DeletePlayer from './components/DeletePlayer/DeletePlayer.jsx';
import EditPlayer from './components/EditPlayer/EditPlayer.jsx';

import './App.css';
axios.defaults.baseURL = 'http://localhost:8000'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/players" element={<Players />} />
          <Route path="/players/:playerId" element={<ViewPlayer />} />
          <Route path="/add-player" element={<AddPlayer />} />
          <Route path="/update-player/:playerId" element={<EditPlayerPage />} />
          <Route path="/delete-player/:playerId" element={<DeletePlayer />} />
          <Route path="/edit-player/:playerId/" element={<EditPlayer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;