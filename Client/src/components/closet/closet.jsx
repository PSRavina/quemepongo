import React, { Component } from 'react'
import BeersServices from '../services/beer.services'
import BeerCard from '../components/BeerCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


class ListBeers extends Component {

    constructor() {
        super()
        this.state = {
            clothes: []
        }
        this.services = new BeersServices()
    }
    componentDidMount = () => this.getAllClothes()
    getAllClothes = () => {
        this.services.getAllClothes()
            .then(allBeers => {
                console.log(allBeers)
                this.setState({ beers: allBeers })
            })
            .catch(err => console.log("TO-DO error en getAllClothes", err))
    }

    render() {
        return (
            <>
                <h1>Lista de cerves</h1>

                <Container>

                    <Row>
                      
                        {this.state.beers.map(elm => <BeerCard key={elm._id} {...elm} />)}
                    </Row>

                </Container>

            </>
        )
    }
}

export default ListBeers