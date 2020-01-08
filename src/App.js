import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import CreatePerson from "./components/create-person.component";
import EditPerson from "./components/edit-person.component";
import PersonList from "./components/person-list.component";

function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/create-person"} className="nav-link">
                React MERN Stack App
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-person"} className="nav-link">
                  Create Person
                </Link>
              </Nav>

              {/*<Nav>
                <Link to={"/edit-person/:id"} className="nav-link">
                  Edit Person
                </Link>
              </Nav>*/} 

              <Nav>
                <Link to={"/person-list"} className="nav-link">
                  Person List
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={CreatePerson} />
                <Route path="/create-person" component={CreatePerson} />
                <Route path="/edit-person/:id" component={EditPerson} />
                <Route path="/person-list" component={PersonList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;