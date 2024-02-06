import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button'
import logo from "../../assets/logo-kodigo.png"

const Header = () => {
    return (
        <Navbar expand="lg" className="">
            <Container>
                <Navbar className="">
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            // width="180"
                            height="40"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                </Navbar>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
                    <Nav className="">
                        <NavDropdown title="BootCamps" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Link </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Link </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Link </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#home" className="px-3">CPD</Nav.Link>
                        <Nav.Link href="#link" className="px-3">Alliances</Nav.Link>
                        <Nav.Link href="#link" className="px-3">About Us</Nav.Link>
                        <Nav.Link href="#link" className="px-3">Blog</Nav.Link>
                        <Nav.Link href="#link" className="px-3">FAQ</Nav.Link>
                    </Nav>
                    {/* <h3>Placeholder del header</h3> */}
                    <div className="btn-sign-in-up" >
                        <Link className="me-3" to={'/signup'}><Button variant="success" className="bg-white text-dark sign-in">Crear cuenta</Button>{' '}</Link>
                        {/* <Link to={'/signup'}><Button variant="default">Crear cuenta</Button>{' '}</Link> */}
                        <Link to={'/login'}><Button variant="secondary sign-up" className="ms-3">Iniciar sesión</Button>{' '}</Link>
                    </div></Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header