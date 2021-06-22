import React, {useState, useEffect} from 'react';
import FactionSelect from './Filters/FactionSelect.js';
import ServerSelect from './Filters/ServerSelect.js';
import { Button, Form} from 'react-bootstrap';
import axios from 'axios';

const QuerySearch = ({
    updateServerString,
    updateFactionString,
    togglePriceSearch,
    updateItemString
    
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

    useEffect(() => {
        if (searchInput.length < 2 || searchInput.length > 50) return;
        else {
            async function itemSearch(){
                try {
                    await axios.get(`http://localhost:5555/ItemSearch?itemSearch=${searchInput}`)
                    .then((response) => console.log(response))
                } catch (error) {
                    console.error(error)
                }
            }
            itemSearch()
        }
    })
    
    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }
    const handleClick = (e) => {
        e.preventDefault();
        togglePriceSearch(true)
    };

    
    return (
        <>
            <ServerSelect updateServerString={updateServerString} setUserServer={setUserServer}/>
            <FactionSelect updateFactionString={updateFactionString} setUserFaction={setUserFaction}/>
            {
                <Form inline>
                    <Form.Label color="blue">Choose Item</Form.Label>
                    <Form.Control type="text" onChange={handleChange} value={searchInput}/>
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