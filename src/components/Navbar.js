import { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import css from "./Navbar.module.css";
import logo from "../assets/images/logo.svg";

class NavScrollExample extends Component {
    render() {
        return (
            <Navbar className={`container ${css.navbar}`} expand="md">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img src={logo} alt="logo" srcset="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className=" m-auto my-2 my-lg-0" navbarScroll>
                            <Nav.Link className={`${css.navItem}`} href="#action1">
                                Home
                            </Nav.Link>
                            <Nav.Link className={`${css.navItem}`} href="#action2">
                                About
                            </Nav.Link>
                            <Nav.Link className={`${css.navItem}`} href="#action3">
                                Contact
                            </Nav.Link>
                            <Nav.Link className={`${css.navItem}`} href="#action4">
                                Blog
                            </Nav.Link>
                            <Nav.Link className={`${css.navItem}`} href="#action5">
                                Careers
                            </Nav.Link>
                        </Nav>
                        <Button className={`${css.requestBtn}`} variant="outline-success">
                            Request Invite
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default NavScrollExample;
