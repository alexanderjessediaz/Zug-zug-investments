import React, {useState} from 'react';
import QuerySearch from './Query/QuerySearch';
import ZugZugLogo from '../Images/ZugZugLogo.png';
import FactionSelect from './Filters/FactionSelect';
import ServerSelect from './Filters/ServerSelect';
import './SelectionNavbar.css';

import { Navbar, Button } from 'react-bootstrap';
import NexusDataLoader from './Loaders/NexusDataLoader';

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
        
          <Navbar id="nav-header" bg="light" expand="lg">
            <Navbar.Brand href="https://zugzug-inc.netlify.app/">
              <img 
                id="zug-zug-logo-nav"
                src={ZugZugLogo}
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