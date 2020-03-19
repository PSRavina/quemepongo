import React from "react";
import ClothesServices from "../../services/ChlotesService";
import "./newclothe.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
export default class FormClothe extends React.Component {
  constructor() {
    super();
    this.state = {
      prenda: "pantalon",
      category: "soleado",
      storm: "Si",
      wind: "Si",
      type: "sportswear",
      image:
        "https://previews.123rf.com/images/apoev/apoev1806/apoev180600084/103284681-default-placeholder-fitness-trainer-in-a-t-shirt-half-length-portrait-photo-avatar-gray-color.jpg"
    };

    this.services = new ClothesServices();
  }

  onChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  sendForm(event) {
    event.preventDefault();
    this.services.addClothes(this.state).then(() => this.props.updateCloth);
  }

  render() {
    return (
      <div>
        <div className="Linkformulario">
          <Link to="/Contents">VOLVER AL ARMARIO</Link>
        </div>
        <form className="Form" onChange={event => this.onChange(event)}>
          <label>ESCOGE UNA PRENDA:</label>
          <select name="prenda">
            <option value="pantalon">Pantalón</option>
            <option value="falda">Falda</option>
            <option value="camiseta/blusa">Blusa/camisa</option>
            <option value="abrigo">Abrigo</option>
            <option value="chaqueta">Chaqueta</option>
            <option value="vestido">Vestido</option>
          </select>
          <label>ESCOGE UNA CATEGORÍA:</label>
          <select name="category">
            <option value="soleado">Soleado</option>
            <option value="medio">Medio</option>
            <option value="frio">Frio</option>
          </select>
          <label>IMPERMEABLE:</label>
          <select name="storm">
            <option value="Si">Si</option>
            <option value="No">no</option>
          </select>
          <label>CORTAVIENTOS::</label>
          <select name="wind">
            <option value="Si">Si</option>
            <option value="No">no</option>
          </select>
          <label>OUTFIT:</label>
          <select name="type">
            <option value="sportswear">Deportiva</option>
            <option value="casual">Casual</option>
            <option value="formal">Formal</option>
            <option value="workwear">Ropa de trabajo</option>
          </select>

          <input name="image" type="file" placeholder="image" value="" />
          <Button onClick={event => this.sendForm(event)} variant="primary">
            Añadir al armario
          </Button>
        </form>
      </div>
    );
  }
}
