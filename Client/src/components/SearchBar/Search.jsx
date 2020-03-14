import React from "react";
import AllClothes from "../closet/closet";
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";
import ClothesServices from "../../services/ChlotesService";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      clothes: [],
      prenda: "",
      category: "",
      storm: false,
      wind: false,
      type: "",
      image: "",
      prenda: ""
    };
    // this.services tiene todos los servicios que hay en ese archivo
    this.services = new ClothesServices();
  }

  componentDidMount() {
    this.setState({
      clothes: this.state.clothes
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      clothes: nextProps.items
    });
  }

  handleChange(e) {
    let currentList = [];
    let newList = [];
    if (e.target.value !== "") {
      currentList = this.state.clothes;
      newList = currentList.filter(clothe => {
        const lc = clothe.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = this.state.clothes;
    }

    this.setState({
      clothes: newList
    });
    this.handleChange = this.handleChange.bind(this);
  }

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
        <div>
          <Navbar bg="light" variant="light">
            <Navbar.Brand href="/home">Quemepongo</Navbar.Brand>
            <Form inline>
              <FormControl
                onChange={this.handleChange}
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-primary">Buscar</Button>
            </Form>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default Search;
