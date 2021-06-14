import React, {useState, useEffect} from 'react';
import FactionSelect from '../Filters/FactionSelect.js';
import ServerSelect from '../Filters/ServerSelect.js';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

const QuerySearch = ({ updateServerString, updateFactionString, updateNexusQuery, updateItemString}) => {
    
    
    const [serverQueryString, setServerQueryString] = useState('')
    const [factionQueryString, setFactionQueryString] = useState('')

    const setUserServer = (e) => {
        console.log(serverQueryString)
        setServerQueryString(e)
    }

    const setUserFaction = (e) => {
        console.log(factionQueryString)
        setFactionQueryString(e)
    }
    
    const handleClick = (e) => {
        e.preventDefault()
        updateNexusQuery(`/wow-classic/v1/items/${serverQueryString.split(" ").join("-")}-${factionQueryString}/13468/prices`)
    }

    const [searchInput, setSearchInput] = useState('')
    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }
    
    useEffect(() => {
        async function suggestionsQuery(){
            try {
                await axios.post("http://localhost:5555", { 
                    userSearchInput: searchInput
                })
            } catch(error) {
                console.error(error)
            }
        }
        suggestionsQuery()
    },[searchInput])

    // useEffect(() => {
    //     async function suggestionsSearch(){
    //         try {
    //             await axios.get("http://localhost:5555/ItemSearch")
    //             .then((response) => console.log(response))
    //         } catch(error) {
    //             console.error(error)
    //         }
    //     }
    //     suggestionsSearch()
    // })

    
    return (
        <>
            <ServerSelect updateServerString={updateServerString} setUserServer={setUserServer}/>
            <FactionSelect updateFactionString={updateFactionString} setUserFaction={setUserFaction}/>
            {
                serverQueryString && factionQueryString === '' ?
                <h1>test</h1>:
                    <Form inline>
                        <Form.Label as="label" color="blue">Choose Item</Form.Label>
                        <Form.Control type="text" onChange={handleChange} value={searchInput}/>
                    </Form>
            }
            <Button onClick={handleClick} variant="secondary">Search</Button>
        </>
    )
}

export default QuerySearch