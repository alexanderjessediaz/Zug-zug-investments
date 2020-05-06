import React, { Component } from 'react';
import { Navbar, Nav, Table } from 'react-bootstrap';

import './App.css';

class App extends Component {

  state = {
    nexus: []
  }


  componentDidMount(){
    fetch("http://localhost:9000")
      .then(response => response.json())
      .then(nexus => this.setState({
        nexus:nexus
      }))
  }

  
  render () {
    return (
      <div className="App">
        <header>
          <Navbar expand="1g" variant="dark" bg="dark">
            <Navbar.Brand href="#">Zug-Zug Investments</Navbar.Brand>
                  <Nav className="mr-auto" class="d-flex justify-content-end">
                    <Nav.Link href="#" >Sign Up</Nav.Link>
                    <Nav.Link href="#" >Sign In</Nav.Link>
                  </Nav>
          </Navbar>
        </header>
  
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Zug-Zug Investments</h1>
            <p class="lead">The important World of Warcraft commodities</p>
            <hr class="my-4">
              
            </hr>
          </div>
        </div>
       
       <div className="row mb-4">
         <div className="col-sm-12 grid-margin">
           <div className="card h-100">
             <h4 className="card-header" class="d-flex justify-content-center">Kromcrush Prices</h4>
             <div className="card-body">
               <Table striped bordered hover nexus={this.state.nexus}>
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
                    <td>100g</td>
                    <td>10</td>
                  </tr>
                </tbody>
               </Table>
             </div>
           </div>
         </div>
       </div>
      </div>
    );
  }

  }

export default App;
