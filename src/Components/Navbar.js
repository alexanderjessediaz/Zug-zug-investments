import React from 'react'
import { Navbar} from 'react-bootstrap'
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
            </Navbar>
        </header>
    )
} 
export default MainNavbar