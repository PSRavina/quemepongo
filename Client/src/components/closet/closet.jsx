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
                    {/* {this.state.AllClothes.map} */}
                   </ul>
                </div>
            </>
        )
    }
}

export default AllClothes