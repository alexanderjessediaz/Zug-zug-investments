import React from 'react';

import { Table, Container, Card } from 'react-bootstrap';

const GoodsTable = ({nexusData}) => {

    const nDataParse = () => {
        if(nexusData.data.data.length === 0) return;
        else {
            const nItemScanArr = nexusData.data.data
            const lastScannedItem = nItemScanArr.pop()
            return lastScannedItem
        }
    };

    const seeData = () => {
        console.log("nexusData:" ,nexusData)
    }

    const itemMarketValue = () => {
        if(nexusData.data.data.length === 0) return;
        else {
            return nDataParse().marketValue/10000 + "g"
        }
    };

    const itemMinBuyout = () => {
        if(nexusData.data.data.length === 0) return;
        else {
            return nDataParse().minBuyout/10000 + "g"
        }
    };
    
    const itemQuantity = () => {
        if(nexusData.data.data.length === 0) return;
        else {
            return nDataParse().quantity
        }
    };
    
    const itemName = () => {
        if(!nexusData.data.name) return;
        else return nexusData.data.name
    }

    const lastScanned = () => {
        if(nexusData.data.data.length === 0) return; 
        else {
            const lastScannedNObj = {
                scannedAt: new Date(nDataParse().scannedAt).toString().split(" ")[0] +
                " " + 
                new Date(nDataParse().scannedAt).toString().split(" ")[4] +
                " " 
            };
            return lastScannedNObj.scannedAt
        }
    } 

    const highestWeekBuyout = () => {
        if(nexusData.data.data.length === 0) return;
        else {
            const maxMinBuyout = nexusData.data.data.reduce((max,obj) => {
                return obj.minBuyout > max.minBuyout? obj:max
            })
            return maxMinBuyout.minBuyout/10000 +"g " + new Date(maxMinBuyout.scannedAt).toString().split(" ")[0] +
            " " +
            new Date(maxMinBuyout.scannedAt).toString().split(" ")[4] + " "
        }
    }

    const lowestWeekBuyout = () => {
        if(nexusData.data.data.length === 0) return;
        else {
            const minMinBuyout = nexusData.data.data.reduce((min,obj) => {
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
                <Card.Title>Current Week Data</Card.Title>
                <Card.Body>{seeData()}</Card.Body>
            </Card>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        
                        <th>Item Name</th>
                        <th>Current Quantity</th>
                        <th>Current Minimum Buyout</th>
                        <th>Current Market Value</th>
                        <th>Last Scanned</th>
                        <th>Highest Buyout This Week</th>
                        <th>Lowest Buyout This Week</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{itemName()}</td>
                        <td>{itemQuantity()}</td>
                        <td>{itemMinBuyout()}</td>
                        <td>{itemMarketValue()}</td>
                        <td>{lastScanned()}</td>
                        <td>{highestWeekBuyout()}</td>
                        <td>{lowestWeekBuyout()}</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}

export default GoodsTable