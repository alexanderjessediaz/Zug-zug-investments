import React, {useState} from 'react';
import QuerySearch from './Query/QuerySearch.js';
import ZugZugLogo from '../Images/ZugZugLogo.png';
import FactionSelect from '../Components/Query/Filters/FactionSelect.js';
import ServerSelect from '../Components/Query/Filters/ServerSelect.js';
import './SelectionNavbar.css'

import { Navbar, Button } from 'react-bootstrap';
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

  const [loadingSearch, setLoadingSearch] = useState(false);

  const [serverQueryString, setServerQueryString] = useState('');

  const setUserServer = (e) => {
    setServerQueryString(e);
};

const [factionQueryString, setFactionQueryString] = useState('');

const setUserFaction = (e) => {
    setFactionQueryString(e);
};

const handleClick = (e) => {
  e.preventDefault();
  togglePriceSearch(true);
};
   
    return (
        
          <Navbar id="nav-header" className="justify-content-between" bg="light" expand="lg">
            <Navbar.Brand id="zug-zug-logo" href="https://zugzug-inc.netlify.app/">
              <img 
                src={ZugZugLogo}
                width="50"
                height="5%"
                alt="orc peon on a black backdrop. Text: Me Gold You"
              />
            </Navbar.Brand>
            { loadingSearch && !nexusData.data ? <NexusDataLoader/>: null}
            <ServerSelect className="filter-btn" updateServerString={updateServerString} setUserServer={setUserServer}/>
            <FactionSelect className="filter-btn" updateFactionString={updateFactionString} setUserFaction={setUserFaction}/>
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
            {
                serverQueryString === "" || factionQueryString === "" || searchItemId.length < 1 ?
                <Button className="filter-btn" disabled variant="secondary">Please Select a Server, Faction, and Item</Button>:
                <Button className="filter-btn" id="searchBtn" onClick={handleClick} variant="warning">Search</Button>
            }
          </Navbar>
        
    )
} 
export default SelectionNavbar