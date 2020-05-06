import React, { Component } from 'react';
import CommoditiesTable from "./containers/CommoditiesTable.js"
import MainNavbar from "./containers/MainNavbar.js"
import Jumbo from './containers/Jumbo.js';

import './App.css';

class App extends Component {

  state = {
    blackLotusObject: [],
    BLData: [],
    BLStats: [],
    BLCurrent: []
  }


  componentDidMount(){
    fetch("http://localhost:9000")
      .then(response => response.json())
      .then(blackLotusObject => this.setState({
        blackLotusObject:blackLotusObject,
        BLData:blackLotusObject.data,
        BLStats:blackLotusObject.data.stats,
        BLCurrent:blackLotusObject.data.stats.current
      }))
  }

  
  
  render () {
    return (
      <div className="App">
        <MainNavbar />
        <Jumbo />
        <CommoditiesTable
          BLData={this.state.BLData} 
          BLStats={this.state.BLStats}
          BLCurrent={this.state.BLCurrent}
        />
      </div>
    );
  }

  }

export default App;
        
