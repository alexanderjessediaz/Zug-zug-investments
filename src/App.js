import React from 'react';
import { Navbar, Nav, Button, Table } from 'react-bootstrap';

import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar expand="1g" variant="dark" bg="dark">
          <Navbar.Brand href="#">Black Lotus Market</Navbar.Brand>
                <Nav className="mr-auto" class="d-flex justify-content-end">
                  <Nav.Link href="#" >Sign Up</Nav.Link>
                  <Nav.Link href="#" >Sign In</Nav.Link>
                </Nav>
        </Navbar>
      </header>

      <div className="container" class="d-flex justify-content-center">
        <div className="row mt=5">
          <div className="col-1g-4 mb-4 grid-margin">
            <div className="card h-100">
              <h2 className="card-header">Realm: Kromcrush</h2>
              <div className="card-body">
                <p className="card-text">Auction House postings for Kromcrush</p>
              </div>
              <div className="card-footer" class="d-flex justify-content-center">
                <Button variant="btn btn-primary">Click me</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
     
     <div className="row mb-4">
       <div className="col-sm-12 grid-margin">
         <div className="card h-100">
           <h4 className="card-header" class="d-flex justify-content-center">AH Table</h4>
           <div className="card-body">
             <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>AJ</td>
                  <td>Diaz</td>
                  <td>zugzug</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jenn</td>
                  <td>Grenier</td>
                  <td>Jags8191</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Jackie</td>
                  <td>Grenier-diaz</td>
                  <td>Jackiedog</td>
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

export default App;
