import React, {useState} from 'react';
import FactionSelect from './Filters/FactionSelect.js';
import ServerSelect from './Filters/ServerSelect.js';
import { Button, Spinner} from 'react-bootstrap';

const QuerySearch = ({
    updateServerString,
    updateFactionString,
    nexusData,
    togglePriceSearch,
    priceQueryBool
}) => {
    
    
    const [serverQueryString, setServerQueryString] = useState('');
    const [factionQueryString, setFactionQueryString] = useState('');

    const setUserServer = (e) => {
        setServerQueryString(e);
    };

    const setUserFaction = (e) => {
        setFactionQueryString(e);
    };
     
    const handleClick = (e) => {
        e.preventDefault();
        togglePriceSearch(true)
    };

    
    return (
        <>
            <ServerSelect updateServerString={updateServerString} setUserServer={setUserServer}/>
            <FactionSelect updateFactionString={updateFactionString} setUserFaction={setUserFaction}/>
                {
                    serverQueryString === "" || factionQueryString === "" ?
                    <Button disabled id="disabledSearchBtn" variant="secondary">Search</Button>:
                        <Button id="searchBtn" onClick={handleClick} variant="primary">Search</Button>
                }
        </>
    )
};

export default QuerySearch;