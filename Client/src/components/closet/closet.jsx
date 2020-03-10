import React, { Component } from "react";
import ClothesServices from "../../services/ChlotesService";
import "./closet.css"
class AllClothes extends Component {
  constructor() {
    super();
    this.state = {
      clothes: [],
      category: "",
      storm: false,
      wind: false,
      type: "",
      image: ""
    };
    this.services = new ClothesServices();
  }
  componentDidMount = () => this.getAllClothes();
  getAllClothes = () => {
    this.services
      .getAllClothes()
      .then(Allclothes => {
        this.setState({ clothes: Allclothes });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <div className="closet">
          <h1>Lista de ropa</h1>
          <ul>
            {this.state.clothes.map((clothe, idx) => (
              <div key={idx}>
                <img className="imgcloset" src={clothe.image} alt="{clothe.image}" />
                <h2>Categoría: {clothe.category}</h2>
                <h2>Typo: {clothe.type}</h2>
                <p>Lluvioso: {clothe.storm}</p>
                <p>Viento: {clothe.wind}</p>
              </div>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default AllClothes;
