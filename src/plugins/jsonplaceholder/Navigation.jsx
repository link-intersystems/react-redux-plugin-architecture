import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Navigation = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand to="#home">JSONPlaceholder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/posts" as={Link}>
              Posts
            </Nav.Link>
            <Nav.Link to="/users" as={Link}>
              Users
            </Nav.Link>
            <Nav.Link to="/comments" as={Link}>
              Comments
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
