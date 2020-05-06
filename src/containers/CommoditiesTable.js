import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class CommoditiesTable extends Component {

  blackLotusCurrentPrice = () => {
    return this.props.BLCurrent.minBuyout
  }

  blackLotusCurrentQuantity = () => {
    return this.props.BLCurrent.quantity
  }

  render(){
    return (
      <div className="row mb-4">
         <div className="col-sm-12 grid-margin">
           <div className="card h-100">
             <h4 className="card-header" class="d-flex justify-content-center">Kromcrush Prices</h4>
             <div className="card-body"> 
                <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Item Number</th>
                    <th>Item Name</th>
                    <th>Average Price</th>
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

