import React from 'react'
import { Navbar } from 'react-bootstrap'
import FactionSelect from './WowFilters/FactionSelect'
import ServerSelect from './WowFilters/ServerSelect'
import BlackLotus from './WowFilters/BlackLotus'

import ZugZugLogo from '../Images/ZugZugLogo.png'

 const SelectionNavbar = () =>{
    return (
        <header>
          <Navbar variant="dark" bg="dark">
            <Navbar.Brand href="http://localhost:3001">
              <img 
                src={ZugZugLogo}
                width="50"
                height="5%"
                alt="orc peon on a black backdrop. Text: Me Gold You"
              />
            </Navbar.Brand>
            <ServerSelect />
            <FactionSelect />
            <BlackLotus />
            
            </Navbar>
        </header>
    )
} 
export default SelectionNavbar