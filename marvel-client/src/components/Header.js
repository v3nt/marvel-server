import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Container,
} from "react-bootstrap";
import MarvelLogo from "../assets/images/MarvelLogo";

const Header = () => {
  return (
    <Container>
      <Navbar collapseOnSelect expand="md">
        <Navbar.Brand href="/">
          <MarvelLogo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/characters/page/1">Characters</Nav.Link>
            <Nav.Link href="/my-marvel">My Marvel</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Header;
