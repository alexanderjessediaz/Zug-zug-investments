import React from 'react';
import './GoodsTableStyles.css';
import Loader from '../../components/Loaders/Loader.js';

import { Table, Container, Card } from 'react-bootstrap';

const GoodsTable = ({nexusData, isPriceLoading}) => {

    const nDataParse = () => {
        if(nexusData.data.data.length === 0) return;
        else {
            const nItemScanArr = nexusData.data.data
            const lastScannedItem = nItemScanArr.pop()
            return lastScannedItem
        };
    };

    const itemMarketValue = () => {
        if(nexusData.data.data.length === 0) return;
        else return nDataParse().marketValue/10000 + "g"
    };

    const itemMinBuyout = () => {
        if(nexusData.data.data.length === 0) return;
        else return nDataParse().minBuyout/10000 + "g"
    };
    
    const itemQuantity = () => {
        if(nexusData.data.data.length === 0) return;
        else return nDataParse().quantity
    };
    
    const itemName = () => {
        if(!nexusData.data.name) return;
        else return nexusData.data.name
    };

    const lastScanned = () => {
        if(nexusData.data.data.length === 0) return;
        else if(nexusData.data.data === undefined) return;  
        else {
            const lastScannedNObj = {
                scannedAt: new Date(nDataParse().scannedAt).toString().split(" ")[0] +
                " " + 
                new Date(nDataParse().scannedAt).toString().split(" ")[4] +
                " " 
            };
            return lastScannedNObj.scannedAt
        };
    };

    const highestWeekBuyout = () => {
        if(nexusData.data.data.length === 0) return;
        else {
            const maxMinBuyout = nexusData.data.data.reduce((max,obj) => {
                return obj.minBuyout > max.minBuyout? obj:max
            })
        const highestWeekBuy = maxMinBuyout.minBuyout/10000 
            + "g " + new Date(maxMinBuyout.scannedAt).toString().split(" ")[0] 
            + " " + new Date(maxMinBuyout.scannedAt).toString().split(" ")[4] 
            + " "
        return highestWeekBuy
        };
    };

    const lowestWeekBuyout = () => {
        if(nexusData.data.data.length === 0) return;
        else {
            const minMinBuyout = nexusData.data.data.reduce((min,obj) => {
                return obj.minBuyout < min.minBuyout? obj:min
            })
        const lowestWeekBuy = minMinBuyout.minBuyout/10000
            + "g " + new Date(minMinBuyout.scannedAt).toString().split(" ")[0] 
            + " " + new Date(minMinBuyout.scannedAt).toString().split(" ")[4] 
            + " "
        return lowestWeekBuy
        };
    };

    return(
        <Container>
            {isPriceLoading ? <Loader/> : null}
            <Card bg="warning">
                <Card.Title id="card-table-title">Previous Week Up To Today</Card.Title>
            </Card>
            <Table id="goods-table" striped bordered hover size="sm">
                <thead>
                    <tr className="goods-table-row">
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
                    <tr className="goods-table-row">
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
    );
};

export default GoodsTable;