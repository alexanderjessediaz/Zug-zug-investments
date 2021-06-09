import React, {useState, useEffect} from 'react';
// import React from 'react';
import FactionSelect from '../Filters/FactionSelect.js';
import ServerSelect from '../Filters/ServerSelect.js';
import axios from 'axios';

import { Form} from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const QuerySearch = (props) => {

    // this component will make call with complete query string to nexus api

    console.log(props)
    const [serverQueryString, setServerQuery] = useState('')
    
    const updateServerChange = (e) => {
        setServerQuery(e)
        
    }

    const [factionQueryString, setFactionQueryString] = useState('')
    
    const updateFactionChange = (e) => {
        setFactionQueryString(e)
    }
    
    
    const [nexusQuery, setNexusQuery] = useState(``)
    
    const wowQuery = (e) => {
        e.preventDefault()
        setNexusQuery(`/wow-classic/v1/items/${serverQueryString}-${factionQueryString}/13468`)
    }

    useEffect(() => {
        if(nexusQuery === ""){
            console.log("nexusQuery is empty")
        } else {
            console.log(nexusQuery)
            axios.post("http://localhost:5555/WowQuery", {
                nQuery: nexusQuery 
        })
        }
    }, [nexusQuery])

    
    return (
        <>
            <Form onSubmit={props.query.getQuery}>
                <ServerSelect  updateServerChange={updateServerChange}/>
                <FactionSelect updateFactionChange={updateFactionChange}/> 
                <Button type="submit" variant="primary">Search</Button>       
            </Form>
        </>
    )
}

export default QuerySearch