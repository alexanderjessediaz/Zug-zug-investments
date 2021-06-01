import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

class CommoditiesTable extends Component {

  blackLotusCurrentPrice = () => {
    const gold = this.props.BLCurrent.minBuyout / 10000 + "g"
    return (
      gold
    )
  }
  blackLotusCurrentQuantity = () => {
    return this.props.BLCurrent.quantity
  }


  moonclothCurrentPrice = () => {
    const gold = this.props.MCCurrent.minBuyout / 10000 + "g"
    return gold
  }
  moonclothCurrentQuantity = () => {
    return this.props.MCCurrent.quantity

  }

  arcaniteBarCurrentPrice = () => {
    const gold = this.props.ABCurrent.minBuyout / 10000 + "g"
    return gold
  }
  arcaniteBarCurrentQuantity = () => {
    return this.props.ABCurrent.quantity
  }

  woolclothCurrentPrice = () => {
    const gold = this.props.WCCurrent.minBuyout / 10000 + "g"
    return gold
  }

  woolclothCurrentQuantity = () => {
    return this.props.WCCurrent.quantity
  }



  render(){
    return (
      <div className="row mb-4">
         <div className="col-sm-12 grid-margin">
           <div className="card h-100">
             <div className="card-body"> 
                <Table striped bordered hover responsive="sm">
                <thead>
                  <tr>
                    <th>Item Number</th>
                    <th>Item Name</th>
                    <th>Current Minimum Price</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Black Lotus</td>
                    <td> {this.blackLotusCurrentPrice()} </td>
                    <td> {this.blackLotusCurrentQuantity()} </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Mooncloth</td>
                    <td> {this.moonclothCurrentPrice()} </td>
                    <td> {this.moonclothCurrentQuantity()} </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Arcanite Bar</td>
                    <td> {this.arcaniteBarCurrentPrice()} </td>
                    <td> {this.arcaniteBarCurrentQuantity()} </td>
                  </tr>
                </tbody>
               </Table>
             </div>
           </div>
         </div>
       </div>
      
    )
  
}
  }

export default CommoditiesTable

