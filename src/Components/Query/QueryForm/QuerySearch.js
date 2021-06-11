import React, {useState} from 'react';
import FactionSelect from '../Filters/FactionSelect.js';
import ServerSelect from '../Filters/ServerSelect.js';
import { Button } from 'react-bootstrap';

const QuerySearch = ({ updateServerChange, updateFactionChange, updateNexusQuery}) => {
    
    
    const [serverQueryString, setServerQuery] = useState('')
    const [factionQueryString, setFactionQueryString] = useState('')
    
    const handleClick = (e) => {
        e.preventDefault()
        updateNexusQuery(`/wow-classic/v1/items/${serverQueryString}-${factionQueryString}/13468`)   
    }

    
    return (
        <>
            <ServerSelect  updateServerChange={updateServerChange}/>
            <FactionSelect updateFactionChange={updateFactionChange}/> 
            <Button onClick={handleClick} variant="secondary">Search</Button>
        </>
    )
}

export default QuerySearch