import React from 'react';
import GoodsGraph from './Graphs/GoodsGraph.js';


import { Container, Row, Button, Spinner } from 'react-bootstrap';

const GoodsContainer = ({ nexusData }) => {

    
    return (
        <Container fluid="xl">        
            
                {nexusData === undefined ?
                    <h5>Welcome to ZugZug Inc. Here we display real time World of Warcraft in game price data.<br></br>
                    <br></br>Please select Faction and Region to retrieve Data<br></br></h5>:
                    <GoodsGraph nexusData={nexusData}/>
                }
                {
                nexusData === undefined ?
                    <Button variant="primary" disabled>
                        <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        />
                        Loading Data...
                    </Button>
                : null
                }
        </Container>
    )
}

export default GoodsContainer