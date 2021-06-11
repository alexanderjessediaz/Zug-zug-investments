import React, {useState, useEffect} from 'react';
import FactionSelect from '../Filters/FactionSelect.js';
import ServerSelect from '../Filters/ServerSelect.js';
import GoodsGraph from './Graphs/GoodsGraph.js';
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
    
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    // }

    useEffect(() => {
        if(nexusQuery === ""){
            console.log("client query post: nexusQuery is empty")
        } else { 
            try {
            console.log( "client query string posted:", nexusQuery)
            axios.post("http://localhost:5555/", {
                nQuery: nexusQuery 
            })
            } catch (error) {
                console.error("Error:", error)
            }
        }
    }, [nexusQuery])

    // const [nexusData, setNexusData] = useState({})
    
    useEffect(() => {
        if(!nexusQuery){
            console.log("Nexus API call: nexusQuery is empty")
            return
        } else {
       async function nexusCall(){
            try {
                console.log("API query sent")
               await axios.get("http://localhost:5555/")
                    .then((response) => {
                        console.log("success:", response)
                        // setNexusData(response.data)
                    })
                }
                  catch(error) {
                    console.error("Error:", error)
                  }}
                  nexusCall()
                }
    },[nexusQuery])

    
    return (
        <>
            <Form>
                <ServerSelect  updateServerChange={updateServerChange}/>
                <FactionSelect updateFactionChange={updateFactionChange}/> 
            </Form>
            <Button onClick={handleClick} variant="secondary">Search</Button>     
        </>
    )
}

export default QuerySearch