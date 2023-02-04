import { Button, Col, Container, Nav, Navbar as NavbarBS, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import carImg from "../car.jpg";
import car from "../car1.jpg"
import "./HomePage.css";
import { Footer } from "../components/Footer"

export function HomePage () {
    return (
        <Container fluid
        style={{
          backgroundImage: `url(${carImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100vw",
          margin: 0,
          padding: 0,
          objectFit: "cover"
          
          
        }}
      >
           
        <Container fluid className="gy-5 g-2">
            <Row className='row-cols gy-5'>
                <Col style= {{width: 100}} className="h-100 d-flex align-items-center justify-content-center display-1">
                Get Word From A Specialist
                </Col>
            </Row>
            <Row className='g-2'>
                <Col className="h-100 d-flex align-items-center justify-content-center fs-3">
                What type of help are you looking for?
                </Col>
            </Row>
            
        </Container>
            <Container className="gy-2">
                <Row className="text-center align-middle btn-group container row">
                    <Col>
                    <Nav.Link to="/form" as={NavLink}> 
                        <Button 
                        style={{ width: "9rem", height: "3rem"}}
                        type="button" 
                        className="square bg-success btn-lg">Pricing</Button>
                    </Nav.Link>
                    </Col>
                    <Col>
                    <Nav.Link to="/form" as={NavLink}> 
                        <Button 
                        style= {{ width: "9rem", height: "3rem", }}
                        type="button" 
                        className="btn btn-success btn-lg">Diagnostics</Button>
                    </Nav.Link>
                    </Col>
                    <Col>
                    <Nav.Link to="/form" as={NavLink}> 
                        <Button 
                        style= {{ width: "9rem", height: "3rem", }} 
                        type="button" 
                        className="btn btn-success btn-lg">Other</Button>
                    </Nav.Link>
                    </Col>
                </Row>
            </Container> 
            <Footer/>
            
            </Container>
    )
}
