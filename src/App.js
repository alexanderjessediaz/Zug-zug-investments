import React, { Component } from 'react';
import CommoditiesTable from "./containers/CommoditiesTable.js"
import MainNavbar from "./containers/MainNavbar.js"

import './App.css';
import Jumbo from './containers/Jumbo.js';

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
        <MainNavbar />
        <Jumbo />
        <CommoditiesTable/>
      </div>
    );
  }

  }

export default App;
        
