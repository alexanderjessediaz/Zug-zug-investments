import React from 'react';
import GoodsGraph from './Graphs/GoodsGraph.js';
import { Container, Alert } from 'react-bootstrap';

const GoodsContainer = ({ nexusData }) => {

    return (
        <Container fluid="xl">        
                {
                    nexusData === undefined ? 
                    <Alert variant="success">
                        <Alert.Heading>Welcome to ZugZug Inc. Here we display real time World of Warcraft in game price data.</Alert.Heading>
                        <p>Please select Faction and Region to retrieve Data</p>
                        <hr />
                    </Alert>
                    :
                    <GoodsGraph nexusData={nexusData}/>
                };
        </Container>
    );
};

export default GoodsContainer;