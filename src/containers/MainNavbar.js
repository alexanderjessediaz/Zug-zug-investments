import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

 const MainNavbar = () =>{
    return (
        <header>
          <Navbar expand="1g" variant="dark" bg="dark">
            <Navbar.Brand href="#">Zug-Zug Investments</Navbar.Brand>
                  <Nav className="mr-auto" class="d-flex justify-content-end">
                    <Nav.Link href="#" >Sign Up</Nav.Link>
                    <Nav.Link href="#" >Sign In</Nav.Link>
                  </Nav>
          </Navbar>
        </header>
    )
} 
export default MainNavbar