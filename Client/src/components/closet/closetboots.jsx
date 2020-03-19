import React, { Component } from "react";
import ClothesServices from "../../services/ChlotesService";
import { Card, Button } from "react-bootstrap";
import "./closet.css";
import FormClothe from "../newclothe/newclothe";

class BootsClothes extends Component {
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
        this.setState({ clothes: Allclothes });
      })
      .catch(err => console.log(err))
  };

  componentDidMount = () => {
    this.getAllClothes()
  }

  render() {
    return (
      <>

        <div className="closet">
        {/* <FormClothe updateClothes={this.getAllClothes()}></FormClothe> */}

          <ul className="prendasul">
            {this.state.clothes.map((clothe, idx) => (
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
