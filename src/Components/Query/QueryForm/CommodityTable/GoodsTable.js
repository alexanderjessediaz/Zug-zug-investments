import React from 'react'
import { Table } from 'react-bootstrap'

const GoodsTable = () => {


 const goodsCurrentQuantity = () => {
    // return this.props.WCCurrent.quantity
  }

 const goodsCurrentPrice = () => {
    // const gold = .minBuyout / 10000 + "g"
    // return gold
  }
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
                    <td>Goods</td>
                    <td>  </td>
                    <td>  </td>
                  </tr>
                </tbody>
               </Table>
             </div>
           </div>
         </div>
       </div> 
    )  
}

export default GoodsTable

