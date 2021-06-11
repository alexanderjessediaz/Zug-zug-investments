import React from 'react'

import GoodsGraph from './Graphs/GoodsGraph.js'
import GoodsTable from './CommodityTable/GoodsTable.js'

import { Container, Row } from 'react-bootstrap';

const GoodsContainer = () => {
    return (
        <Container>
            <Row>
                <GoodsGraph/>
            </Row>
            <Row>
                <GoodsTable />
            </Row>
        </Container>
    )
}

export default GoodsContainer