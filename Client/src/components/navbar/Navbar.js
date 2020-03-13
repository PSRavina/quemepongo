import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import {Button} from "react-bootstrap"

function Navbar({ userInSession, logout }) {

  const handleLogout = e => {
    logout();
  };

  return (
    userInSession ?
      <nav className="nav-style">
        <ul>
          <li>
          <Button onClick={(e) => handleLogout(e)} variant="danger"> Log out
           </Button>
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