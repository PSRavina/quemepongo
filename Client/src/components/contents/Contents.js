import React, { Component } from 'react';
import "./Contents.css"
import BootsClothes from "../closet/closetboots";
import Search from '../SearchBar/Search';
import Temperature from "../termperature/temperature";
//clase componente que renderiza los contenidos genéricos
//usando rendering condicional y el componente Switch que ya conocéis podéis mostrar los contenidos oportunos que queráis
class Contents extends Component {
  render() {
    return (<div className="allClothes">
        {/* <AllClothes></AllClothes> */}
        <Temperature className="Tempcloset"></Temperature>
        <BootsClothes className="boot"></BootsClothes>
       
        </div>);
    
  }
}

export default Contents;