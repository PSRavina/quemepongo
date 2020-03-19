import React, { Component } from "react";
import ClothesServices from "../../services/ChlotesService";
import { Card, Button , Navbar, Form, FormControl} from "react-bootstrap";
import "./closet.css";
import FormClothe from "../newclothe/newclothe";
import {Link} from "react-router-dom"
class BootsClothes extends Component {
  constructor() {
    super();
    this.state = {
      clothes: [],
      clothesToDisplay: [],
      prenda: "",
      category: "",
      storm: false,
      wind: false,
      type: "",
      image: "",
      prenda: "",
      search:"",
    };
    // this.services tiene todos los servicios que hay en ese archivo
    this.services = new ClothesServices();
  }

  onDelete = (event, id) => {
    event.preventDefault();
    this.services
      .deleteClothes(id)
      .then(() => this.getAllClothes())
      .catch(err => console.log(err))
    };

  getAllClothes = () => {
    this.services
      .getAllClothes()
      .then(Allclothes => {
        this.setState({ 
          clothes: Allclothes ,
          clothesToDisplay: Allclothes
        });
      })
      .catch(err => console.log(err))
  };

  searchClothes = (e) => {
    console.log("entra en borrar")
   
    let results = this.state.clothes.filter(clothe => clothe.prenda.includes(this.state.search) || clothe.category.includes(this.state.search) || clothe.type.includes(this.state.search) 
    )
    this.setState({
      clothesToDisplay : results
    })
  }

  updateForm =(e) => {
    const { name, value } = e.target;
    console.log(value);
    console.log(name);
    this.setState({
        [name]: value
    },()=>{
      this.searchClothes()
    });
  }

  componentDidMount = () => {
    this.getAllClothes()
  }

  render() {
    return (
      <>
  
          <Navbar bg="light" variant="light">
            <Navbar.Brand href="/home">Quemepongo</Navbar.Brand>
            <Form inline>
              <FormControl
                onChange={this.updateForm}
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                value={this.state.value}
                name="search"
              />
        
  
              <div className="Linkformulario">
                <Link to="/FormClothe">Añadir nueva ropa</Link>
              </div>
            </Form>
          </Navbar>


        <div className="closet">
          
        {/* <FormClothe updateClothes={this.getAllClothes()}></FormClothe> */}

          <ul className="prendasul">
            {this.state.clothesToDisplay.map((clothe, idx) => (
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={clothe.image} />
                <Card.Body>
                  <Card.Title>{clothe.prenda}</Card.Title>
                  <Card.Title>Tipo: {clothe.type}</Card.Title>
                  <Card.Title>Clima: {clothe.category}</Card.Title>
                  <Card.Title>Lluvia: {clothe.storm}</Card.Title>
                  <Card.Title>Cortavientos: {clothe.wind}</Card.Title>

                  <Button onClick={(event) => this.onDelete(event, clothe._id)} variant="danger">
                    Eliminar prenda
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

//no le gusta nada jajaj
export default BootsClothes;
