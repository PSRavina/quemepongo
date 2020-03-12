import React, { Component } from "react";
import ClothesServices from "../../services/ChlotesService";
import "./closet.css";
class AllClothes extends Component {
  constructor() {
    super();
    this.state = {
      clothes: [],
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

  onDelete = id => {
    //Lo primero de todo es ver que entra en los metodos cuando le vamos dando
    console.log("Hola soy el metodo que elimina");
    console.log(id);
    this.services
      .deleteClothes(id)
      .then(() => console.log("delete ok"))
      .catch(err => console.log("ha fallado el delete"));
  };

  getAllClothes = () => {
    this.services
      .getAllClothes()
      .then(Allclothes => {
        this.setState({ clothes: Allclothes });
      })
      .catch(err => console.log(err));
  };

  // Lo de el mapeo de la ropa esta OK,
  // Además

  //   onDelete(id) {
  //     deleteonePost(id) //esto ya no lo entiendo, te explico
  //         .then((data) => {
  //             let onePosts = this.state.onePosts.filter((post) => {
  //                 return id !== post.id;
  //             });

  //             this.setState(state => {
  //                 state.onePosts = Posts;
  //                 return state;
  //             });
  //         })
  //         .catch((err) => {
  //             console.error('err', err);
  //         });
  // }
  //eso fue cogido de un ejemplo ok si si eso aparece bien necesito la funcion borrar o si hay que llevarla desde services o yo que se
  // Ok voy a escribir yo ok

  componentDidMount = () => this.getAllClothes();

  render() {
    return (
      <>
        <div className="closet">
          <h1>Lista de ropa</h1>
          <ul>
            {this.state.clothes.map((clothe, idx) => (
              <div key={idx}>
                <img
                  className="imgcloset"
                  src={clothe.image}
                  alt="{clothe.image}"
                />
                <h2>Prenda: {clothe.prenda}</h2>
                <h2>Categoría: {clothe.category}</h2>
                <h2>Typo: {clothe.type}</h2>
                <p>Lluvioso: {clothe.storm}</p>
                <p>Viento: {clothe.wind}</p>
                <button onClick={this.onDelete(clothe._id)}>Borrar</button>
              </div>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
//no le gusta nada jajaj
export default AllClothes;
