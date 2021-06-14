import React, {useState} from 'react';
import FactionSelect from '../Filters/FactionSelect.js';
import ServerSelect from '../Filters/ServerSelect.js';
import { Button, Form } from 'react-bootstrap';

const QuerySearch = ({ updateServerString, updateFactionString, updateNexusQuery, updateItemString}) => {
    
    
    const [serverQueryString, setServerQuery] = useState('')
    const [factionQueryString, setFactionQueryString] = useState('')
    
    const handleClick = (e) => {
        e.preventDefault()
        updateNexusQuery(`/wow-classic/v1/items/${serverQueryString.split(" ").join("-")}-${factionQueryString}/13468/prices`)
    }

    
    return (
        <>
            <ServerSelect  updateServerString={updateServerString}/>
            <FactionSelect updateFactionString={updateFactionString}/>
            <Form inline>
                <Form.Label as="label" color="blue">Choose Item</Form.Label>
                <Form.Control as="input" type="string"/>
            </Form>
            <Button onClick={handleClick} variant="secondary">Search</Button>
        </>
    )
}

export default QuerySearch