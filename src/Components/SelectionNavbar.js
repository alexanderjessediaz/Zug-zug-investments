import React from 'react';
import { Navbar } from 'react-bootstrap';
import QuerySearch from './Query/QueryForm/QuerySearch.js';

import ZugZugLogo from '../Images/ZugZugLogo.png'


 const SelectionNavbar = (props) =>{
   
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
            <QuerySearch query={props}/>
            </Navbar>
        </header>
    )
} 
export default SelectionNavbar