import React, { Component } from 'react';
import AllClothes from '../closet/closet';
import "./Contents.css"
import BootsClothes from "../closet/closetboots";
//clase componente que renderiza los contenidos genéricos
//usando rendering condicional y el componente Switch que ya conocéis podéis mostrar los contenidos oportunos que queráis
class Contents extends Component {
  render() {
    return (<div className="allClothes">
        {/* <AllClothes></AllClothes> */}
        <BootsClothes className="boot"></BootsClothes>
        
        </div>);
    
  }
}

export default Contents;