import React from 'react'

import GoodsGraph from './Graphs/GoodsGraph.js'
// import GoodsTable from './CommodityTable/GoodsTable.js'

import { Container, Row } from 'react-bootstrap';

const GoodsContainer = ({ nexusData }) => {

    const seeData = () => {
        console.log("Container/nexusData:", nexusData)
    }
    return (
        <Container>
            {seeData()}
            <Row>
                <GoodsGraph nexusData={nexusData} />
            </Row>
            <Row>
                {/* <GoodsTable nexusData={nexusData} nexusItemPrice={nexusItemPrice}/> */}
            </Row>
        </Container>
    )
}

export default GoodsContainer