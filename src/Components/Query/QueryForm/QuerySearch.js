// import React, {useEffect} from 'react';
import React from 'react';
import FactionSelect from '../Filters/FactionSelect.js';
import ServerSelect from '../Filters/ServerSelect.js';

// import axios from 'axios';
import { Form} from 'react-bootstrap';

const QuerySearch = () => {

    // this component will make call with complete query string to nexus api

    const handleChange = () => {
        console.log("test")
    }

    // useEffect(() => {
    //     axios.post("http://localhost:5555/WowQuery", {
    //         fQuery: faction
    //     })
    // }, [faction])

    // useEffect(() => {
    //     axios.post("http://localhost:5555/WowQuery", {
    //       sQuery: selectedServer
    //     })
    //   }, [selectedServer])
    return (
        <>
            <Form>
                <ServerSelect  handleChange={handleChange}/>
                <FactionSelect handleChange={handleChange}/>
                
            </Form>
        </>
    )
}

export default QuerySearch