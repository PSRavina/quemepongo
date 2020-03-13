import TemperatureService from "../../services/temperatureServices";
import React, { Component } from "react";
import "./temperature.css";
import {Card} from "react-bootstrap"
class Temperature extends Component {
  constructor() {
    super();
    this.state = {
      Temps: [],
      country: "",
      description: "",
      icon: "",
      temp: 0,  
      humidity: 0,
      windSpeed: 0,
      city: ""
    };
    this.services = new TemperatureService();
  }

  getTemperature = () => {
    this.services
      .getTemperature()
      .then(allTemps => {
        this.setState({
          Temps: allTemps,
          country: allTemps.sys.country,
          description: allTemps.weather[0].description,
          icon: allTemps.weather[0].icon,
          temp: allTemps.main.temp,
          humidity: allTemps.main.humidity,
          windSpeed: allTemps.wind.speed,
          city: allTemps.name
        });
      })
      .catch(err => console.log(err));
  };

  componentDidMount = () => this.getTemperature();

  render() {
    // const { }
    return (
      <div>
        {/* <Card border="light" style={{ width: "14rem", height: "8rem"}}>
          <Card.Header>TEMPERATURA</Card.Header>
          <Card.Body>
            <Card.Img src={`https://openweathermap.org/img/w/${this.state.icon}.png`}></Card.Img>
            <Card.Title>{this.state.temp}ºC</Card.Title>
            <Card.Title>{this.state.city}</Card.Title>
            <Card.Title>{this.state.country}</Card.Title>
            <Card.Text>{this.state.windSpeed}km/h</Card.Text>
            <Card.Text>{this.state.humidity}%</Card.Text>
          </Card.Body>
        </Card> */}
        <h2>{this.state.city}</h2>
        <h2>{this.state.country}</h2>
        <h2>{this.state.temp}ºC</h2>
        <h2>{this.state.description}</h2>
        <img
          className="Icon"
          src={`https://openweathermap.org/img/w/${this.state.icon}.png`}
          alt="Icon"
        />
        <h2>Humedad: {this.state.humidity}%</h2>
        <h2>Velocidad del viento: {this.state.windSpeed}km/h</h2>
      </div>
    );
  }
}

export default Temperature;
