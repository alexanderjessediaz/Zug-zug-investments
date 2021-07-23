import React from 'react';
import QuerySearch from './Query/QuerySearch.js';
import ZugZugLogo from '../Images/ZugZugLogo.png';

import { Navbar } from 'react-bootstrap';

 const SelectionNavbar = ({
    updateServerString,
    updateFactionString,
    togglePriceSearch,
    updateSearchItem,
    userSearchResults,
    searchResultItem,
    isItemSearchLoading,
    nexusData
   
}) =>{
   
    return (
        <header>
          <Navbar className="justify-content-between" bg="light" expand="lg">
            <Navbar.Brand href="https://zugzug-inc.netlify.app/">
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
              isItemSearchLoading={isItemSearchLoading}
              nexusData={nexusData}
            />
            </Navbar>
        </header>
    )
} 
export default SelectionNavbar