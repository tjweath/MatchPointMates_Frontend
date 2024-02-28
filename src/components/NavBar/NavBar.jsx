import React from 'react';
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar bg-ebfbee">
      <div className="d-flex justify-content-end align-items-center">
        <div className="links">
        <a className="nav-link link-style" href="/home">
            Home
          </a>
          <a className="nav-link link-style" href="/players">
            My Players
          </a>
          <a className="nav-link link-style" href="/add-player">
            Add Player
          </a>
        </div>
      </div>
    </nav>
  );
}