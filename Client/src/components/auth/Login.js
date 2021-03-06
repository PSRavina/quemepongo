// auth/Signup.js
import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import AuthService from "./AuthService";
import Temperature from "../termperature/temperature";
import "./Login.css";
import { Button } from "react-bootstrap";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service
      .login(username, password)
      .then(response => {
        this.setState({
          username: username,
          password: password,
          error: false
        });

        this.props.getUser(response);
      })
      .catch(error => {
        this.setState({
          username: username,
          password: password,
          error: true
        });
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h3>Por favor, haz login para entrar :</h3>

        <form onSubmit={this.handleFormSubmit}>
          <fieldset>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={e => this.handleChange(e)}
            />
          </fieldset>

          <fieldset>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={e => this.handleChange(e)}
            />
          </fieldset>
          <Button
            variant="primary"
            className="login-button"
            type="submit"
            value="Login"
          >
            Log in
          </Button>
          {/* <input className="login-button" type="submit" value="Login" /> */}
        </form>

        <h1>{this.state.error ? "Error" : ""}</h1>
        <h4>
          <Temperature></Temperature>
        </h4>
      </div>
    );
  }
}

export default Login;
