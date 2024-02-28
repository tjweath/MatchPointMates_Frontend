import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import Home from './components/home/home.jsx';
import Players from './pages/Players/Players.jsx';
import ViewPlayer from './pages/ViewPlayer/ViewPlayer.jsx';
import AddPlayer from './pages/AddPlayer/AddPlayer.jsx';
import EditPlayerPage from './pages/EditPlayerPage/EditPlayerPage.jsx';
import DeletePlayer from './components/DeletePlayer/DeletePlayer.jsx';
import EditPlayer from './components/EditPlayer/EditPlayer.jsx';

import Login from "./components/Login";
import Logout from "./components/Logout";
import Signup from "./components/Signup";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<Signup />} />
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