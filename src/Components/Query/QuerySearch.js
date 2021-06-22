import React, {useState} from 'react';
import FactionSelect from './Filters/FactionSelect.js';
import ServerSelect from './Filters/ServerSelect.js';
import { Button, Spinner} from 'react-bootstrap';

const QuerySearch = ({
    updateServerString,
    updateFactionString,
    nexusData,
    togglePriceSearch
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

    const loadingState = () => {
        if(nexusData === undefined && serverQueryString === "" && factionQueryString === ""){
            return <Button disabled variant="secondary">Waiting for Search</Button>
        } else if (serverQueryString !== "" && factionQueryString !== "" && nexusData === undefined) {
           return <Button disabled><Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"/>Loading Data...</Button>
        } else if(nexusData !== undefined){
            return <Button disabled><Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true"/>Updating Data...</Button>
        } else {
           return;
        }
    }
    return (
        <>
            <ServerSelect updateServerString={updateServerString} setUserServer={setUserServer}/>
            <FactionSelect updateFactionString={updateFactionString} setUserFaction={setUserFaction}/>
                {
                    serverQueryString === "" || factionQueryString === "" ?
                    <Button disabled id="disabledSearchBtn" variant="secondary">Search</Button>:
                        <Button id="searchBtn" onClick={handleClick} variant="primary">
                            {nexusData === undefined ? 'Search' : 'Search again'}
                        </Button>
                }
                {loadingState()}
        </>
    )
};

export default QuerySearch;