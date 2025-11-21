import { Navbar, Nav, Container, Row, Col, ListGroup } from "react-bootstrap";

export default function App() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
        <Container fluid>          
          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Espaço para a navbar fixa */}
      <div style={{ marginTop: "70px" }}></div>

      {/* LAYOUT */}
      <Container fluid>
        <Row>
          {/* SIDEBAR */}
          <Col xs={2} className="bg-light border-end vh-100 p-3">            
            <ListGroup variant="flush">
              <ListGroup.Item action>APIs</ListGroup.Item>
              <ListGroup.Item action>Apps</ListGroup.Item>
              <ListGroup.Item action>Planos</ListGroup.Item>
            </ListGroup>
          </Col>

          {/* CONTENT */}
          <Col xs={10} className="p-4">
            <h1>Hello World</h1>
            <p>Conteúdo principal do Host App</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
