import { useState } from "react";
import { Suspense } from "react";
import { lazy } from "react";
import { Navbar, Nav, Container, Row, Col, ListGroup } from "react-bootstrap";

const ApiManager = lazy(() => import("api_manager/Module"));

export default function App() {
  const [module, setModule] = useState("home");
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
              <ListGroup.Item action onClick={() => setModule("api")}>
                API Manager
              </ListGroup.Item>
              <ListGroup.Item action>Apps</ListGroup.Item>
              <ListGroup.Item action>Planos</ListGroup.Item>
            </ListGroup>
          </Col>
         <Col xs={10} className="bg-light border-end vh-100 p-3"> 
             {
            module === "api" && (
              <Suspense fallback={<div>Carregando módulo API Manager...</div>}>
                <ApiManager />
              </Suspense>
            )
          }
         </Col>         
        </Row>
      </Container>
    </>
  );
}
