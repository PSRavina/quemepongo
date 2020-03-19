import React from "react";
import AllClothes from "../closet/closet";
import { Button, Navbar, Form, FormControl} from "react-bootstrap";
import ClothesServices from "../../services/ChlotesService";
import { Link } from "react-router-dom";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clothes: [],
      prenda: "",
      category: "",
      storm: false,
      wind: false,
      type: "",
      image: ""
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

  onChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(this.state);
  };

  searchClothes = value => {
    console.log(this.state);
    debugger;
    const clothesCopie = [...this.state.category];
    const clothesOriginal = [...this.state.category];
    let newList = [];
    console.log(value);

    newList = clothesOriginal.filter(item => {
      // const lc = item.name.toLowerCase();
      // const filter = value.toLowerCase();
      const lc = item.prenda;
      console.log(lc);
      const filter = value;
      return lc.includes(filter);
    });

    console.log(newList);
    this.setState({ foods: newList });
  };

  updateForm(e) {
    const { name, value } = e.target;
    console.log(value);
    console.log(name);
    // this.searchClothes(value);
    // this.setState({
    //     [name]: value
    // });
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
                onChange={this.updateForm}
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                value={this.state.value}
              />
              <Button variant="outline-primary" onclick={this.searchClothes}>
                Buscar
              </Button>
              <div className="Linkformulario">
                <Link to="/FormClothe">Añadir nueva ropa</Link>
              </div>
            </Form>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default Search;
