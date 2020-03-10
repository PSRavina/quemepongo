import React, { Component } from 'react'
import ClothesServices from '../../services/ChlotesService'

class AllClothes extends Component {

    constructor() {
        super()
        this.state = {
            clothes: [],
            category: "",
            storm: false,
            wind: false,
            type: "",
            image: "",
        }
        this.services = new ClothesServices()
    }
    componentDidMount = () => this.getAllClothes()
    getAllClothes = () => {
        this.services.getAllClothes()
            .then(Allclothes => {
                console.log(Allclothes)
                this.setState({ clothes: Allclothes })
            })
            .catch(err => console.log("TO-DO error en getAllClothes", err))
    }

    render() {
        return (
            <>
                <div>
                    <h1>Lista de ropa</h1>
                    <ul>
                        {this.state.clothes.map(clothe => <div>
                            <img src={clothe.image} alt="{clothe.image}"/>
                            <h2>Categoría: {clothe.category}</h2>
                            <h2>Typo: {clothe.type}</h2>
                            <p>Lluvioso: {clothe.storm}</p>
                            <p>Viento: {clothe.wind}</p>

                        </div>)}
                    </ul>
                </div>
            </>
        )
    }
}

export default AllClothes