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
          <a className="nav-link link-style" href="/login">
            Login
          </a>
          <a className="nav-link link-style" href="/logout">
            Logout
          </a>
          <a className="nav-link link-style" href="/signup">
            Signup
          </a>
        </div>
      </div>
    </nav>
  );
}