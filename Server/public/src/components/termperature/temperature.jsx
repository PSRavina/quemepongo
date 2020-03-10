
import axios from 'axios'
import { render } from "react-dom/cjs/react-dom.development"
import TemperatureService from "../../services/temperatureServices"
import React, { Component } from 'react'
import "./temperature.css"
class Temperature extends Component {
    constructor() {
        super()
        this.state = {
            Temps: [],
            country: "",
            description: "",
            icon: "",
            temp: 0,
            humidity: 0,
            windSpeed: 0,
            city: "",
        }
        this.services = new TemperatureService()
    }

    getTemperature = () => {
        this.services.getTemperature()
            .then(allTemps => {
                console.log(allTemps)
                this.setState({
                    Temps: allTemps,
                    country: allTemps.sys.country,
                    description: allTemps.weather[0].description,
                    icon: allTemps.weather[0].icon,
                    temp: allTemps.main.temp,
                    humidity: allTemps.main.humidity,
                    windSpeed: allTemps.wind.speed,
                    city: allTemps.name,

                })

            })
            .catch(err => console.log(err))
    }

    componentDidMount = () => this.getTemperature()

    render() {
        // const { }
        return (
            <div>
                <h2>{this.state.city}</h2>
                <h2>{this.state.country}</h2>
                <h2>{this.state.temp}ºC</h2>
                <h2>{this.state.description}</h2>
                <img className="Icon" src= {`http://openweathermap.org/img/w/${this.state.icon}.png`} alt="Icon" />
                <h2>Humedad: {this.state.humidity}%</h2>
                <h2>Velocidad del viento: {this.state.windSpeed}km/h</h2>
            </div>
        )
    }

}

export default Temperature;