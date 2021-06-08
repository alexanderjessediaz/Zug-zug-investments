import React from 'react';
import FactionSelect from '../FactionSelect.js.js.js.js';
import ServerSelect from '../Filters/ServerSelect';

import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

const QuerySearch = () => {

    // this component will make call with complete query string to nexus api


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
                <ServerSelect />
                <FactionSelect />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default QuerySearch