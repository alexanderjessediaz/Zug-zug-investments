import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import ZugZugLogo from '../Images/ZugZugLogo.png'

 const MainNavbar = () =>{
    return (
        <header>
          <Navbar expand="1g" variant="dark" bg="dark">
            <Navbar.Brand href="#">
              <img 
                src={ZugZugLogo}
                width="60"
                height="60"
                alt="peon"
              />
              Zug-Zug
            </Navbar.Brand>
                  <Nav className="mr-auto" class="d-flex justify-content-end">
                  </Nav>
          </Navbar>
        </header>
    )
} 
export default MainNavbar