import React, {useState} from 'react';
import FactionSelect from './Filters/FactionSelect.js';
import ServerSelect from './Filters/ServerSelect.js';
import { Button, FormControl, Dropdown} from 'react-bootstrap';

const QuerySearch = ({
    updateServerString,
    updateFactionString,
    togglePriceSearch,
    updateSearchItem,
    userSearchResults,
    searchResultItem
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
        setSearchInput(e.target.value)
        updateSearchItem(e.target.value)
    }
    
    const handleClick = (e) => {
        e.preventDefault();
        togglePriceSearch(true)
    };

    const handleSelect = (e) => {
        searchResultItem(e)
    }

    const searchResults = () => {
        console.log(userSearchResults)
        if (!userSearchResults.data) return;
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
        href="http://localhost:3001"
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
              placeholder="Type to filter..."
              onChange={handleChange}
              value={searchInput}
            />
            <ul className="list-unstyled" id="dropdown-menu">
              {React.Children.toArray(children).filter(
                (child) =>
                  !searchInput || child.props.children.toLowerCase().startsWith(searchInput),
              )}
            </ul>
          </div>
        );
      },
    );
               
    //  <Form inline>
    //     <Form.Label color="blue">Choose Item</Form.Label>
    //     <Form.Control
    //         autoFocus
    //         custom
    //         onChange={handleChange} 
    //         value={searchInput}
    //     />
    // </Form>               
    
    return (
        <>
            <ServerSelect updateServerString={updateServerString} setUserServer={setUserServer}/>
            <FactionSelect updateFactionString={updateFactionString} setUserFaction={setUserFaction}/>
            {
                <Dropdown onSelect={handleSelect} >
                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                  Choose Item
                </Dropdown.Toggle>
                <Dropdown.Menu as={CustomMenu} className="dropdown-menu-show">
                  {searchResults()}
                </Dropdown.Menu>
              </Dropdown>
            }
            {
                serverQueryString === "" || factionQueryString === "" ?
                <Button disabled id="disabledSearchBtn" variant="secondary">Search</Button>:
                <Button id="searchBtn" onClick={handleClick} variant="primary">Search</Button>
            }
        </>
    )
};

export default QuerySearch;