import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar expand="1g" variant="dark" bg="dark">
          <Navbar.Brand href="#">Black Lotus Market</Navbar.Brand>
                <Nav className="mr-auto" class="d-flex justify-content-end">
                  <Nav.Link href="#" >Sign Up</Nav.Link>
                  <Nav.Link href="#" >Sign In</Nav.Link>
                </Nav>
        </Navbar>
      </header>
     
    </div>
  );
}

export default App;
