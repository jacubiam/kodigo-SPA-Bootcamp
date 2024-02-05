import { collection, getDocs, DocumentData, orderBy, query } from "firebase/firestore"
import { db } from "../firebase"
import { useEffect, useState } from "react"
import BootcampCard from "../components/HomePage/BootcampCard"
import { Link } from "react-router-dom"
import BootcampsDocentes from "../components/HomePage/BootcampsDocentes"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import logo from "../assets/logo-kodigo.png";

const HomePage = () => {
    const [bootcamps, setBootcamps] = useState<DocumentData[]>([])

    useEffect(() => {
        const data: Array<DocumentData> = []
        const fetchBootcampData = async () => {
            const q = query(collection(db, 'bootcamps'), orderBy('level'))
            const fetchBootcamps = await getDocs(q)
            fetchBootcamps.forEach((doc) => {
                data.push(doc.data())
            })

            setBootcamps(data)
        }

        fetchBootcampData()
    }, [])

    return (
        <>
            <header className=" header-home text-center" style={{ height: "100px" }}>
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
                                <Link className="me-3" to={'/signup'}><Button variant="success"className="bg-white text-dark sign-in">Crear cuenta</Button>{' '}</Link>
                                {/* <Link to={'/signup'}><Button variant="default">Crear cuenta</Button>{' '}</Link> */}
                                <Link to={'/login'}><Button variant="secondary sign-up"className="ms-3">Iniciar sesión</Button>{' '}</Link>
                            </div></Navbar.Collapse>
                    </Container>
                </Navbar>

            </header>
            <div className="container" >
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {bootcamps && bootcamps.map((bootcamp) => {
                        return (
                            <div key={bootcamp.title} className="col">
                                <BootcampCard bootcamp={bootcamp} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <BootcampsDocentes />

        </>
    )
}

export default HomePage