require('dotenv').config();

import axios from 'axios'

export default class Temperatures {

    constructor() {
        this.service = axios.create({
            baseURL: `http://api.openweathermap.org/data/2.5/weather?q=Madrid&units=metric&appid=${API_WEATHER_KEY}`
        })
    }
    getGrades = () => this.service.get('/temperature').then(response => response.data)
}
