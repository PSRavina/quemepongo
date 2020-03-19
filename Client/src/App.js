import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import AuthService from "./components/auth/AuthService";
import Contents from "./components/contents/Contents";
import FormClothe from "./components/newclothe/newclothe";
import Temperature from "./components/termperature/temperature";
import Landing from "./components/landing/landing";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  updateForm(e, field) {
    this.setState({
      ...this.state,
      [field]: e.target.value
    });
  }

  addFood = thecloth => {
    const Clothescopie = [...this.state.clothes];
    Clothescopie.push(thecloth);
    this.setState({ clothes: Clothescopie });
  };

  getUser = userObj => {
    this.setState({
      loggedInUser: userObj
    });
  };

  logout = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
    });
  };

  //este método vuelca la información del usuario y lo guarda en el state de app que siempre puedes revisitar
  fetchUser() {
    return this.service
      .loggedin()
      .then(response => {
        this.setState({
          loggedInUser: response
        });
      })
      .catch(err => {
        this.setState({
          loggedInUser: false
        });
      });
  }

  componentDidMount() {
    this.fetchUser();
  }

  render() {
    //aqui hacemos rendering condicional dependiendo de si tenemos un usuario logeado o no
    if (this.state.loggedInUser) {
      //en este caso mostramos los contenidos ya que hay usuario
      return (
        <React.Fragment>
          <Redirect to="/Contents" />

          <div className="home">
            <header className="App-header">
              <Navbar
                userInSession={this.state.loggedInUser}
                logout={this.logout}
              />
            </header>
            <main>
              
              <Switch>
                <Route
                  exact
                  path="/Contents"
                  component={Contents}
                  render={() => (
                    <Contents
                      userInSession={this.state.loggedInUser}
                      logout={this.logout}
                    />
                  )}
                />

                <Route
                  exact
                  path="/FormClothe"
                  component={FormClothe}
                  render={() => <FormClothe />}
                />
              </Switch>
            </main>
          </div>
        </React.Fragment>
        //ola
      );
    } else {
      //si no estás logeado, mostrar opcionalmente o login o signup
      return (
        <React.Fragment>
          <Redirect to="/Landing" />

          <div className="App">
            <header className="App-header1">
              <div className="login">
                <Navbar
                  userInSession={this.state.loggedInUser}
                  logout={this.logout}
                />

                <Switch>
                <Route
                  exact
                  path="/Landing"
                  component={Landing}
                  render={() => <Landing/>}
                    />

                  <Route
                    exact
                    path="/signup"
                    render={() => <Signup getUser={this.getUser} />}
                  />
                  <Route
                    exact
                    path="/login"
                    render={() => (
                      <Login getUser={user => this.getUser(user)} />
                    )}
                  />
                </Switch>
              </div>
              {/* <div className="TempDiv">
                <h4>
                  <Temperature></Temperature>
                </h4>
              </div> */}
            </header>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default App;
