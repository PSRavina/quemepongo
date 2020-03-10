import React from 'react';
import ClothesServices from '../../services/ChlotesService';

export default class FormClothe extends React.Component {

    constructor() {
        super()
        this.state = {
            Clothes: [],
            category: "",
            storm: "",
            wind: "",
            type: "",
            image: "",
        }
        this.services = new ClothesServices()
    }



    updateForm(e, field) {
        this.setState({
            ...this.state,
            [field]: e.target.value
        });
    }

    sendForm(e) {
        e.preventDefault(); //para evitar el refresco de la página
        this.setState({
            category: "",
            storm: "",
            wind: "",
            type: "",
            image: "",
        })
            // .then(() => {
            //})

                this.services.addClothes(this.state)
    }

    render() {
        return (
            <div>
                <form>

                    <label for="category">Choose a category:</label>
                    <select value={this.state.category}>
                        <option value="soleado">Soleado</option>
                        <option value="medio">Medio</option>
                        <option value="frio">Frio</option>

                    </select>
                    <label for="storm">Impermeable:</label>
                    <select value={this.state.storm}>
                        <option value="true">Si</option>
                        <option value="false">no</option>

                    </select>
                    <label for="wind">Cortavientos:</label>
                    <select value={this.state.wind}>
                        <option value="true">Si</option>
                        <option value="false">no</option>

                    </select>

                    <label for="type">Outfit:</label>
                    <select value={this.state.type}>
                        <option value="sportwear">Deportiva</option>
                        <option value="casual">Casual</option>
                        <option value="formal">Formal</option>
                        <option value="workwear">Ropa de trabajo</option>

                    </select>

                    <input
                        type="file"
                        placeholder="image"
                        value={this.state.image}

                        onChange={e => this.updateForm(e, "image")}
                    />
                    <input type="submit" value={"Send form"} onClick={e => this.sendForm(e)} />


                </form>
            </div>
        )
    }
}