// import React from "react";
// import { Link } from "react-router-dom";
// // import "./Navbar.css";
// import ClothesServices from "../../services/ChlotesService";
// import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";

// class SearchBar extends Component {
//   state = {
//     clothesOriginal: clothes,
//     clothes: clothes
//   };
//   searchFood = value => {
//     const clothesCopie = [...this.state.clothes];
//     const clothesOriginal = [...this.state.clothes];
//     let newList = [];
//     console.log(value);

//     newList = clothesOriginal.filter(item => {
//       // const lc = item.name.toLowerCase();
//       // const filter = value.toLowerCase();
//       const lc = item.name;
//       console.log(lc);
//       const filter = value;
//       return lc.includes(filter);
//     });

//     console.log(newList);
//     this.setState({ clothes: newList });
//   };

//   updateForm(e) {
//     const { name, value } = e.target
//     console.log(value)
//     this.props.searchClothes(value)
//     this.setState({
//         [name]: value
//     });  
// }

//   // function SearchBar({ userInSession, logout }) {
//   render() {
//     <div>
//       <Navbar bg="light" variant="light">
//         <Navbar.Brand href="/home">Quemepongo</Navbar.Brand>

//         <Form inline>
//           <FormControl
//             onChange={e => this.updateForm(e)}
//             type="text"
//             placeholder="Search"
//             className="mr-sm-2"
//             value={this.state.name}
//           />
//           <Button variant="outline-primary">Buscar</Button>
//         </Form>
//       </Navbar>
//     </div>;
//   }
// }
// export default SearchBar;
