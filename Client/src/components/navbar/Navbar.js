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
          <h2>Bienvenido a tu armario virtual</h2>
        </div>
      </nav>
      :
      <div>
        <nav className="nav-style1">
          <div>
            <Link to="/signup">Signup</Link>
          </div>
          <div>
            <Link to="/login">Login</Link>  
          </div>
          
        </nav>
      </div >
  )
}

export default Navbar;