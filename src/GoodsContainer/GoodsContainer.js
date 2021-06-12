import React from 'react'

import GoodsGraph from './Graphs/GoodsGraph.js'
// import GoodsTable from './CommodityTable/GoodsTable.js'

import { Container, Row } from 'react-bootstrap';

const GoodsContainer = ({ nexusData, serverQueryString, factionQueryString }) => {

    
    return (
        <Container>        
            <Row>
                {nexusData === undefined ?
                    <h5>No Data</h5> :
                    <GoodsGraph
                        nexusData={nexusData}
                        serverQueryString={serverQueryString}
                        factionQueryString={factionQueryString}
                    />
                }
            </Row>
            <Row>
                {/* <GoodsTable nexusData={nexusData} nexusItemPrice={nexusItemPrice}/> */}
            </Row>
        </Container>
    )
}

export default GoodsContainer