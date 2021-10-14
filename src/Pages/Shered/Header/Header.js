import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const { users, logOut } = useAuth();

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="/home">Logo</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={HashLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#services">
              service
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#experts">
              Experts
            </Nav.Link>
            {users.email ? (
              <Nav.Link onClick={logOut} as={Link} to="/login">
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
            {users?.email && (
              <Navbar.Text>
                Signed in as: <a href="#login">{users.displayName}</a>{" "}
                <Image width="30px" src={users.photoURL} roundedCircle />
              </Navbar.Text>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
