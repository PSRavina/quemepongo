// auth/auth-service.js
import axios from 'axios';

class AuthService {
  constructor() {
    let xxx = `${process.env.REACT_APP_API_URL}/auth`

    this.service =
     axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/auth`,
      withCredentials: true
    });
  }

  signup = (username, password) => {
    return this.service.post('/signup', {username, password})
    .then(response => response.data)
  }

  login = (username, password) => {
    return this.service.post('/login', {username, password})
    .then(response => response.data)
  }

  loggedin = () => {
    return this.service.get('/currentUser',)
    .then(response => response.data)
  }

  logout = () => {
    return axios.post("http://localhost:3001/api/auth/logout")
    .then(response => {
      
      return response.data
    })
  }
}

export default AuthService;