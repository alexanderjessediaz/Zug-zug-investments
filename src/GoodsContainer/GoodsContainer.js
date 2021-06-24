import React from 'react';
import GoodsGraph from './Graphs/GoodsGraph.js';
import GoodsTable from './GoodsTable/GoodsTable.js';
import ZugZugLogo from '../Images/ZugZugLogo.png';

import './GoodsContainerStyles.css'
import { Container, Card } from 'react-bootstrap';

const GoodsContainer = ({ nexusData }) => {

    return (
        <Container id="goods-main-container" fluid="xl">        
            {
                !nexusData.data ? 
                    <Card id="welcome-card" bg={"success"}>
                        <Card.Header>ZugZug Inc.</Card.Header>
                        <Card.Img id="zugzug-logo" variant="top" src={ZugZugLogo}/>
                        <Card.Body>
                            <Card.Title>Our Purpose</Card.Title>
                            <Card.Text>
                                Help players of World of Warcraft maximize their in game wealth through providing key information on real time in game prices. 
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            To proceed please select game server, faction, and item to retrieve game data
                        </Card.Footer>
                    </Card>
                :<Container id="goods-graph-table-container">
                    <GoodsGraph nexusData={nexusData}/>
                    <GoodsTable nexusData={nexusData}/>
                </Container>
            }
        </Container>
    );
};

export default GoodsContainer;