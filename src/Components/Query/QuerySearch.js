import React, {useState} from 'react';
import FactionSelect from './Filters/FactionSelect.js';
import ServerSelect from './Filters/ServerSelect.js';
import { Button, Form, Dropdown, Container} from 'react-bootstrap';

const QuerySearch = ({
    updateServerString,
    updateFactionString,
    togglePriceSearch,
    updateSearchItem,
    userSearchResults
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
        e.preventDefault()
    }

    // const searchResults = userSearchResults.map(
    //     (searchItem, i) => 
    //     <Dropdown.Item
    //         eventKey={searchItem.itemId}
    //         key={i}
    //         onSelect={handleSelect}
    //     >{searchItem.name}</Dropdown.Item>
    // )

    const searchResults = () => {
        console.log(userSearchResults)
    }
               

    
    return (
        <>
            <ServerSelect updateServerString={updateServerString} setUserServer={setUserServer}/>
            <FactionSelect updateFactionString={updateFactionString} setUserFaction={setUserFaction}/>
            {
                
                 <Form inline>
                    <Form.Label color="blue">Choose Item</Form.Label>
                    <Form.Control
                        autoFocus
                        type="text"
                        onChange={handleChange} 
                        value={searchInput}
                    />
                </Form>               
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