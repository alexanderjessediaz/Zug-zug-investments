import React from 'react'
import { Navbar } from 'react-bootstrap'
import FactionButton from './WowFilters/FactionButton'

import ZugZugLogo from '../Images/ZugZugLogo.png'

 const SelectionNavbar = () =>{
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
            < FactionButton />
            
            </Navbar>
        </header>
    )
} 
export default SelectionNavbar