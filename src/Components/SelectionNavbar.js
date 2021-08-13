import React, {useState} from 'react';
import QuerySearch from './Query/QuerySearch.js';
import ZugZugLogo from '../Images/ZugZugLogo.png';

import { Navbar } from 'react-bootstrap';
import NexusDataLoader from '../Components/Loaders/NexusDataLoader.js';

 const SelectionNavbar = ({
    updateServerString,
    updateFactionString,
    togglePriceSearch,
    setSearchItemString,
    updateSearchItem,
    userSearchResults,
    searchResultId,
    searchItemId,
    isItemSearchLoading,
    nexusData
   
}) =>{

  const [loadingSearch, setLoadingSearch] = useState(false)
   
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
            { loadingSearch && !nexusData.data ? <NexusDataLoader/>: null}
            <QuerySearch 
              setLoadingSearch={setLoadingSearch}
              updateServerString={updateServerString}
              updateFactionString={updateFactionString}
              togglePriceSearch={togglePriceSearch}
              setSearchItemString={setSearchItemString}
              updateSearchItem={updateSearchItem}
              userSearchResults={userSearchResults}
              searchResultId={searchResultId}
              searchItemId={searchItemId}
              isItemSearchLoading={isItemSearchLoading}
              nexusData={nexusData}
            />
          </Navbar>
        </header>
    )
} 
export default SelectionNavbar