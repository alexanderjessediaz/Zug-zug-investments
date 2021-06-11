import React, {useState, useEffect} from 'react';
import FactionSelect from '../Filters/FactionSelect.js';
import ServerSelect from '../Filters/ServerSelect.js';
// import GoodsGraph from './Graphs/GoodsGraph.js';
import axios from 'axios';


import { Form} from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const QuerySearch = () => {
    
    // this component will make call with complete query string to nexus api
    
    const [serverQueryString, setServerQuery] = useState('')
    
    const updateServerChange = (e) => {
        setServerQuery(e)
    }

    const [factionQueryString, setFactionQueryString] = useState('')
    
    const updateFactionChange = (e) => {
        setFactionQueryString(e)
        
    }
    
    
    const [nexusQuery, setNexusQuery] = useState(``)
    
    
    const handleClick = (e) => {
        e.preventDefault()
        setNexusQuery(`/wow-classic/v1/items/${serverQueryString}-${factionQueryString}/13468`)
        
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        if(nexusQuery === ""){
            console.log("nexusQuery is empty")
        } else { 
            try {
            console.log(nexusQuery)
            axios.post("http://localhost:5555/", {
                nQuery: nexusQuery 
            })
            } catch (error) {
                console.error("Error:", error)
            }
        }
    }, [nexusQuery])

    // const [nexusData, setNexusData] = useState('')
    
    useEffect(() => {
        if(!nexusQuery){
            console.log("nexusQuery is empty")
            return
        } else {
       async function nexusCall(){
            try {
               await axios.get("http://localhost:5555/")
                    .then((response) => console.log("success:", response))
                }
                  catch(error) {
                    console.error("Error:", error)
                  }}
                  nexusCall()
                }
    },[handleSubmit])

    // What I am trying to do:
    // Step 1) send complete query data to backend via post
    // Step 2) backend sends get request to API with query data
    // Step 3) backend sends API data back to frontend
    // Step 4) frontend receives data and displays it

    // I am able to send correct query data to backend
    // backend correctly sends query to API
    // backend receives API response
    
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <ServerSelect  updateServerChange={updateServerChange}/>
                <FactionSelect updateFactionChange={updateFactionChange}/> 
                <Button onClick={handleClick} variant="secondary">Submit</Button>     
            </Form>
        </>
    )
}

export default QuerySearch