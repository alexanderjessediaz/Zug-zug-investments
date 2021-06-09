import React from 'react';
import { Navbar } from 'react-bootstrap';
import QuerySearch from './Query/QueryForm/QuerySearch.js';

import ZugZugLogo from '../Images/ZugZugLogo.png'
// import FactionSelect from './QueryForm/Filters/FactionSelect.js';
// import ServerSelect from './QueryForm/Filters/ServerSelect.js';

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
            <QuerySearch />
            </Navbar>
        </header>
    )
} 
export default SelectionNavbar