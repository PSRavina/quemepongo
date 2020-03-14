import axios from "axios";

export default class TemperatureService {
  constructor() {
    this.service = axios.create({
      baseURL: `https://api.openweathermap.org/data/2.5/weather?q=Madrid&units=metric&appid=521ac5c00f7f010e3fec218a77ce8285&lang=es`
    });
  }
  getTemperature = () => this.service.get().then(response => response.data);
}
