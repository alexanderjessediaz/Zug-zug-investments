import React from 'react';
import GoodsGraph from './Graphs/GoodsGraph.js';

import './GoodsContainerStyles.css'
import { Container, Card } from 'react-bootstrap';

const GoodsContainer = ({ nexusData }) => {

    return (
        <Container id="goods-container" fluid="xl">        
                {
                    nexusData === undefined ? 
                    <Card id="welcome-card" border="primary">
                        <Card.Header>ZugZug Inc.</Card.Header>
                        <Card.Body>
                            <Card.Title>Our Purpose</Card.Title>
                            <Card.Text>
                                Display real time World of Warcraft in game price data based on selected region. 
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            To proceed please select game server and faction to retrieve Data
                        </Card.Footer>
                    </Card>
                    :
                    <GoodsGraph nexusData={nexusData}/>
                }
        </Container>
    );
};

export default GoodsContainer;