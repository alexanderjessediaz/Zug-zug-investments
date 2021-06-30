import React from 'react';
import GoodsGraph from './Graphs/GoodsGraph.js';
import GoodsTable from './GoodsTable/GoodsTable.js';
import ZugZugLogo from '../Images/ZugZugLogo.png';

import './GoodsContainerStyles.css'
import { Container, Card, CardGroup } from 'react-bootstrap';

const GoodsContainer = ({ nexusData, nexusNews }) => {
    const seeData = () => {
        console.log(nexusNews)
    }
    const newsData = () => {
        if (!nexusNews.data) return;
        else return nexusNews.data.map((newsObj, i) => {
            return (
                <Card key={i} id="news-cards" bg={"light"}>
                    <Card.Body>
                        <Card.Header className="news-card-header">{newsObj.categories[0]}</Card.Header>
                        <Card.Title>{newsObj.title}</Card.Title>
                        <Card.Text className="news-content">
                            {newsObj.content}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <a id="news-anchor-tag" href={newsObj.link} target="_blank" rel="noopener noreferrer">Link to article</a>
                        <br></br>
                        <small className="text-muted">{newsObj.pubDate.split('').slice(0,-14).join('')}</small>
                    </Card.Footer>
                </Card> 
            )
        })
    }
    
    return (
        <Container id="goods-main-container" fluid="xl">        
            {
                !nexusData.data ? 
                    <Container id="welcome-card-container" fluid="lg">
                        <Card id="welcome-card" bg={"light"}>
                            <h1 id="welcome-card-header" >ZugZug Inc.</h1>
                            <Card.Img id="zugzug-logo" variant="top" src={ZugZugLogo} alt="orc peon on a black backdrop. Text: Me Gold You"/>
                            <Card.Body>
                                <Card.Title>Our Purpose:</Card.Title>
                                <Card.Text>
                                    Help players of World of Warcraft maximize their in game wealth through providing key information on real time in game prices
                                </Card.Text>
                                <Card.Text>To see any in-game item data please select a server, faction, and item</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card id="news-header-card" bg={"warning"} border="dark">
                            <Card.Body id="news-header-card-text">World of Warcraft Classic News</Card.Body>
                        </Card>
                        <CardGroup >
                            {seeData()}
                            {newsData()}
                        </CardGroup>
                    </Container>
                :<Container id="goods-graph-table-container">
                    <GoodsGraph nexusData={nexusData}/>
                    <GoodsTable nexusData={nexusData}/>
                </Container>
            }
        </Container>
    );
};

export default GoodsContainer;