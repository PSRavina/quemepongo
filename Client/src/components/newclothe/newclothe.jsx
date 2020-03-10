import React from "react";
import ClothesServices from "../../services/ChlotesService";

export default class FormClothe extends React.Component {
  constructor() {
    super();
    this.state = {
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
    this.services.addClothes(this.state);
  }

  render() {
    return (
      <div>
        <form onChange={event => this.onChange(event)}>
          <label>Choose a category:</label>
          <select name="category">
            <option value="soleado">Soleado</option>
            <option value="medio">Medio</option>
            <option value="frio">Frio</option>
          </select>
          <label>Impermeable:</label>
          <select name="storm">
            <option value="Si">Si</option>
            <option value="No">no</option>
          </select>
          <label>Cortavientos:</label>
          <select name="wind">
            <option value="Si">Si</option>
            <option value="No">no</option>
          </select>
          <label>Outfit:</label>
          <select name="type">
            <option value="sportswear">Deportiva</option>
            <option value="casual">Casual</option>
            <option value="formal">Formal</option>
            <option value="workwear">Ropa de trabajo</option>
          </select>
          {/* <input
            name="image"
            type="file"
            placeholder="image"
            value={this.state.image}
            onChange={e => this.updateForm(e, "image")}
          /> */}
          <button onClick={event => this.sendForm(event)}> Send Form</button>
        </form>
      </div>
    );
  }
}
