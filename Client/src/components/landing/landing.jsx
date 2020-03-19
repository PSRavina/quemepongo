import React, { Component } from "react";
import AuthService from "../auth/AuthService";
import { Link } from "react-router-dom";
import "./landing.css";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ ...this.state, loggedInUser: nextProps["userInSession"] });
  }
  handleLogout = e => {
    this.props.logout();
  };
  render() {
    return (
      <div className="landing">

        <div className="div-text">
          <h2>
            ¿Cansado de tener que elegir tu ropa cada vez que sales a la calle?<br></br><br/>
            ¿Cansado de tener que abrir la ventana para saber que tiempo hace y
            que ponerte?<br></br><br/>
            ¡Aquí tenemos tu solución!<br></br><br/>
            ¡Clasifica tu ropa según la climatología y accede a ella de formna sencilla!
            Ademas te muestra la información meteorológica para que selecciones tu vestimenta de la manera más óptima.
            ¡Pruébalo ya!

          </h2>     
        </div>
        <div className="land-photo">
          <img src="https://mejorconsalud.com/wp-content/uploads/2019/03/consejos-para-no-acumular-ropa-en-el-armario-500x333.jpg" alt="Armario"></img>
        </div>
      </div>
    );
  }
}
export default Landing;
