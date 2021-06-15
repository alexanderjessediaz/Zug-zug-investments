import React from 'react';
import GoodsGraph from './Graphs/GoodsGraph.js';


import { Container, Row } from 'react-bootstrap';

const GoodsContainer = ({ nexusData }) => {

    
    return (
        <Container >        
            <Row>
                {nexusData === undefined ?
                    <h5>Welcome to ZugZug Inc. Here we display real time World of Warcraft in game price data.</h5> :
                    <GoodsGraph nexusData={nexusData}/>
                }
            </Row>
            <Row>
                
            </Row>
        </Container>
    )
}

export default GoodsContainer