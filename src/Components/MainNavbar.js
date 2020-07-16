import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import ZugZugLogo from '../Images/ZugZugLogo.png'

 const MainNavbar = () =>{
    return (
        <header>
          <Navbar variant="dark" bg="dark">
            <Navbar.Brand href="http://localhost:3001">
              <img 
                src={ZugZugLogo}
                width="50"
                height="50"
                alt="peon"
              />
            </Navbar.Brand>
                  <Nav className="mr-auto">
                    <Nav.Item>
                      <Nav.Link href="http://localhost:3001/login">Login/Sign Up</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="http://loaclhost:3001/yourProfile">Your Profile</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Nav>
                    <Nav.Link href="#">Advise</Nav.Link>
                    <Nav.Link href="#">Kromarket</Nav.Link>
                  </Nav>
          </Navbar>
        </header>
    )
} 
export default MainNavbar