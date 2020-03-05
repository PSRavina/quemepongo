import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar({ userInSession, logout }) {

  const handleLogout = e => {
    logout();
  };

  return (
    userInSession ?
      <nav className="nav-style">
        <ul>
          <li>
            <button
              onClick={(e) => handleLogout(e)}>Logout</button>
          </li>
        </ul>
        <div className="header">
          <h2>Welcome {userInSession.username} - Ironhacker</h2>
        </div>
      </nav>
      :
      <div>
        <nav className="nav-style">
          <ul>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
  )
}

export default Navbar;