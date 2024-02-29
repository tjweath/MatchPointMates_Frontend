import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import "./NavBar.css";

export default function NavBar() {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    if (localStorage.getItem("access_token") !== null) {
      setIsAuth(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    setIsAuth(false);
    navigate("/home");
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          {isAuth && (
            <>
              <Nav.Link href="/players">My Players</Nav.Link>
              <Nav.Link href="/add-player">Add Player</Nav.Link>
            </>
          )}
        </Nav>
        <Nav>
          {isAuth ? (
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          ) : (
            <>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/signup">Signup</Nav.Link>
            </>
          )}
        </Nav>
      </Navbar>
    </div>
  );
}
