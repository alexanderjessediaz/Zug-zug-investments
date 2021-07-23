import React, {useState} from 'react';
import FactionSelect from './Filters/FactionSelect.js';
import ServerSelect from './Filters/ServerSelect.js';
import ItemSearchLoader from '../ItemSearchLoader';

import { Button, FormControl, Dropdown} from 'react-bootstrap';
import './QuerySearchStyles.css';

const QuerySearch = ({
    updateServerString,
    updateFactionString,
    togglePriceSearch,
    updateSearchItem,
    userSearchResults,
    searchResultItem,
    isItemSearchLoading,
    nexusData
}) => {
    
    const [serverQueryString, setServerQueryString] = useState('');
    
    const setUserServer = (e) => {
        setServerQueryString(e);
    };
    
    const [factionQueryString, setFactionQueryString] = useState('');

    const setUserFaction = (e) => {
        setFactionQueryString(e);
    };
    
    const [searchInput, setSearchInput] = useState('')

    const handleChange = (e) => {
        updateSearchItem(e.target.value)
        setSearchInput(e.target.value)
    }
    
    const handleClick = (e) => {
        e.preventDefault();
        togglePriceSearch(true)
    };

    const handleSelect = (e) => {
        searchResultItem(e)
    }
    
    const searchResults = () => {
    
      if(!userSearchResults.data) return;
      else {
        return userSearchResults.data.map((result, i) => {
            return <Dropdown.Item
                eventKey={result.itemId}
                key={i}
                onSelect={handleSelect}
            >{result.name}</Dropdown.Item>
            })
        }
    }

    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
        id="item-search-toggle"
        href="https://zugzug-inc.netlify.app/"
        ref={ref}
          onClick={(e) => {
            e.preventDefault();
              onClick(e);
            }}
            >
            {children}
            &#x25bc;
        </a>
      ));
      
      const CustomMenu = React.forwardRef(
        ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    
        return (
          <div
            ref={ref}
            style={style}
            className={className}
            aria-labelledby={labeledBy}
          >
            <FormControl
              autoFocus
              className="mx-3 my-2 w-auto"
              aria-placeholder="type item name to filter"
              placeholder="try searching primal"
              onChange={handleChange}
              value={searchInput}
            />
            <ul className="list-unstyled" id="dropdown-menu">
              { React.Children.toArray(children).filter(
                (child) =>
                  !searchInput || child.props.children.toLowerCase().startsWith(searchInput),
              )}
            </ul>
          </div>
        );
      },
    );
                          
    return (
        <>
            <ServerSelect updateServerString={updateServerString} setUserServer={setUserServer}/>
            <FactionSelect updateFactionString={updateFactionString} setUserFaction={setUserFaction}/>
            {
                <Dropdown onSelect={handleSelect} >
                  { isItemSearchLoading ? <ItemSearchLoader/> : null }
                  <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                    {nexusData.length === 0? "Choose Item": nexusData.data.name}
                  </Dropdown.Toggle>
                  <Dropdown.Menu as={CustomMenu} className="dropdown-menu-show">
                    {searchResults()}
                  </Dropdown.Menu>
              </Dropdown>
            }
            {
                serverQueryString === "" || factionQueryString === "" || searchInput.length < 2 ?
                <Button disabled id="disabledSearchBtn" variant="secondary">Awaiting selections</Button>:
                <Button id="searchBtn" onClick={handleClick} variant="warning">Search</Button>
            }
        </>
    )
};

export default QuerySearch;