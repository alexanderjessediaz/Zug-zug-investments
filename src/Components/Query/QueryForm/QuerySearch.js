import React, {useState, useEffect} from 'react';
// import React from 'react';
import FactionSelect from '../Filters/FactionSelect.js';
import ServerSelect from '../Filters/ServerSelect.js';
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
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setNexusQuery(`/wow-classic/v1/items/${serverQueryString}-${factionQueryString}/13468`)
    }

    
    useEffect(() => {
        if(nexusQuery === ""){
            console.log("nexusQuery is empty")
            return
        } else {
            console.log(nexusQuery)
            axios.post("http://localhost:5555/WowQuery", {
                nQuery: nexusQuery 
            }).then((queryObject => {
                        console.log("Success:", queryObject)
                        }
                      )).catch((error) => {
                        console.error("Error:", error)
                      }) 
            }
    }, [nexusQuery])

    // What I am trying to do:
    // Step 1) send complete query data to backend via post
    // Step 2) backend sends get request to API with query data
    // Step 3) backend sends API data back to frontend
    // Step 4) frontend receives data and displays it

    // I am able to send correct query data to backend
    // backend correctly sends query to API
    // backend receives API response


    

    // useEffect(() => {

    // })
    // const nexusCall = async function(){
    //     fetch("http://localhost:5555/WowQuery", {method: "GET"})
    //       .then((response) => response.json())
    //       .then((queryObject => {
    //         console.log("Success:", queryObject)
    //         }
    //       )).catch((error) => {
    //         console.error("Error:", error)
    //       })
    //   }
    
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <ServerSelect  updateServerChange={updateServerChange}/>
                <FactionSelect updateFactionChange={updateFactionChange}/> 
                <Button type="submit" variant="primary">Submit</Button>       
            </Form>
            {/* <Button type="submit" variant="primary" onClick={handleClick}>Compile</Button> */}
        </>
    )
}

export default QuerySearch