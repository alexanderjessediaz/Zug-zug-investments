import React from 'react';
import { Navbar } from 'react-bootstrap';
import QuerySearch from './Query/QuerySearch.js';

import ZugZugLogo from '../Images/ZugZugLogo.png';


 const SelectionNavbar = ({
    updateServerString,
    updateFactionString,
    togglePriceSearch,
    updateSearchItem,
    userSearchResults,
    searchResultItem,
    nexusData
   
}) =>{
   
    return (
        <header>
          <Navbar className="justify-content-between" bg="light" expand="lg">
            <Navbar.Brand href="http://localhost:3001">
              <img 
                src={ZugZugLogo}
                width="50"
                height="5%"
                alt="orc peon on a black backdrop. Text: Me Gold You"
              />
            </Navbar.Brand>
            <QuerySearch 
              updateServerString={updateServerString}
              updateFactionString={updateFactionString}
              togglePriceSearch={togglePriceSearch}
              updateSearchItem={updateSearchItem}
              userSearchResults={userSearchResults}
              searchResultItem={searchResultItem}
              nexusData={nexusData}
            />
            </Navbar>
        </header>
    )
} 
export default SelectionNavbar