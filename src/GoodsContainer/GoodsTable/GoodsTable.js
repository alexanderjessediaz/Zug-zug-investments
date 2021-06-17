import React from 'react';

import { Table, Container, Card } from 'react-bootstrap';

const GoodsTable = ({nexusData}) => {

     
    const itemMarketValue = nexusData.data.nData.data[0].marketValue/10000 + "g"

    const itemMinBuyout = nexusData.data.nData.data[0].minBuyout/10000 + "g"

    const itemQuantity = nexusData.data.nData.data[0].quantity

    const goodsName = nexusData.data.nData.name

    const lastScanned =  {
        scannedAt: new Date(nexusData.data.nData.data[0].scannedAt).toString().split(" ")[0] +
        " " + 
        new Date(nexusData.data.nData.data[0].scannedAt).toString().split(" ")[4] +
        " " 
    };

    const highestWeekBuyout = () => {
        if(nexusData === undefined) return null;
        else {
            const maxMinBuyout = nexusData.data.nData.data.reduce((max,obj) => {
                return obj.minBuyout > max.minBuyout? obj:max
            })
            return maxMinBuyout.minBuyout/10000 +"g " + new Date(maxMinBuyout.scannedAt).toString().split(" ")[0] +
            " " +
            new Date(maxMinBuyout.scannedAt).toString().split(" ")[4] + " "
        }
    }

    const lowestWeekBuyout = () => {
        if(nexusData === undefined) return null;
        else {
            const minMinBuyout = nexusData.data.nData.data.reduce((min,obj) => {
                return obj.minBuyout < min.minBuyout? obj:min
            })
            return minMinBuyout.minBuyout/10000 +"g " + new Date(minMinBuyout.scannedAt).toString().split(" ")[0] +
            " " +
            new Date(minMinBuyout.scannedAt).toString().split(" ")[4] + " "
        }
    }

    return(
        <Container>
            <Card>
                <Card.Title>Current Week</Card.Title>
            </Card>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Quantity</th>
                        <th>Current Minimum Buyout</th>
                        <th>Current Market Value</th>
                        <th>Last Scanned</th>
                        <th>Highest Buyout This Week</th>
                        <th>Lowest Buyout This Week</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{goodsName}</td>
                        <td>{itemQuantity}</td>
                        <td>{itemMinBuyout}</td>
                        <td>{itemMarketValue}</td>
                        <td>{lastScanned.scannedAt}</td>
                        <td>{highestWeekBuyout()}</td>
                        <td>{lowestWeekBuyout()}</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}

export default GoodsTable