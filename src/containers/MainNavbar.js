import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

 const MainNavbar = () =>{
    return (
        <header>
          <Navbar expand="1g" variant="dark" bg="dark">
            <Navbar.Brand href="#">
              <img 
                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fvignette1.wikia.nocookie.net%2Fwowwiki%2Fimages%2Fd%2Fd1%2FPeon_face_WC3.jpg%2Frevision%2Flatest%3Fcb%3D20081211004507&f=1&nofb=1"
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