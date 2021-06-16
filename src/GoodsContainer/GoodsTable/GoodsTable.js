import React from 'react';

import { Table, Container, Card } from 'react-bootstrap';

const GoodsTable = ({nexusData}) => {

    const marketValue = nexusData.data.nData.data[48].marketValue/10000 + "g"

    const minBuyout = nexusData.data.nData.data[48].minBuyout/10000 + "g"

    const quantity = nexusData.data.nData.data[48].quantity

    const goodsName = nexusData.data.nData.name

    const lastScanned =  {
        scannedAt: new Date(nexusData.data.nData.data[48].scannedAt).toString().split(" ")[0] +
        " " + 
        new Date(nexusData.data.nData.data[48].scannedAt).toString().split(" ")[4] +
        " " 
    };

    return(
        <Container>
            <Card>
                <Card.Title>Current Week</Card.Title>
            </Card>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Goods Name</th>
                        <th>Quantity</th>
                        <th>Minimum Buyout</th>
                        <th>Market Value</th>
                        <th>Last Scanned</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{goodsName}</td>
                        <td>{quantity}</td>
                        <td>{minBuyout}</td>
                        <td>{marketValue}</td>
                        <td>{lastScanned.scannedAt}</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}

export default GoodsTable