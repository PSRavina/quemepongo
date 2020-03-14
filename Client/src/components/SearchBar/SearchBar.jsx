import React from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css";
import ClothesServices from "../../services/ChlotesService";
import { Button, Navbar, Nav, Form, FormControl } from "react-bootstrap";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: []
    };
  }
}

function SearchBar({ userInSession, logout }) {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/home">Quemepongo</Navbar.Brand>

        <Form inline>
          <FormControl
            onChange={text => this.filter(text)}
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
          <Button variant="outline-primary">Buscar</Button>
        </Form>
      </Navbar>
    </div>
  );
}

export default SearchBar;
