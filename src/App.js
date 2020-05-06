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
    BLCurrent: [],
    moonclothObject: [],
    MCCurrent: [],
    arcaniteBarData: [],
    ABCurrent: []
  }


  componentDidMount(){
    this.timer = setInterval(()=> this.getBlackLotusData(), 10000)
    this.timer = setInterval(()=> this.getMoonclothData(), 10000)
    this.timer = setInterval(()=> this.getArcaniteBarData(), 10000)
  }
      async getBlackLotusData(){
        
        fetch("http://localhost:9000/BlackLotus", {method: "GET"})
          .then((response) => response.json())
          .then((blackLotusObject => this.setState({
            blackLotusObject:blackLotusObject,
            BLData:blackLotusObject.data,
            BLStats:blackLotusObject.data.stats,
            BLCurrent:blackLotusObject.data.stats.current
          })))
          .catch((error) => {
            console.error(error)
          })
      };
      async getMoonclothData(){
        
        fetch("http://localhost:9000/MoonCloth", {method: "GET"})
          .then((response) => response.json())
          .then((moonclothObject => this.setState({
            moonclothObject:moonclothObject,
            MCCurrent:moonclothObject.data.stats.current
          })))
          .catch((error) => {
            console.error(error)
          })
      };
      async getArcaniteBarData(){
        
        fetch("http://localhost:9000/ArcaniteBar", {method: "GET"})
          .then((response) => response.json())
          .then((arcaniteBarData => this.setState({
            arcaniteBarData:arcaniteBarData,
            ABCurrent:arcaniteBarData.data.stats.current
          })))
          .catch((error) => {
            console.error(error)
          })
      };
  
  render () {
    return (
      <div className="App">
        <MainNavbar />
        <Jumbo />
        <CommoditiesTable
          MCCurrent={this.state.MCCurrent}
          BLCurrent={this.state.BLCurrent}
          ABCurrent={this.state.ABCurrent}
        />
      </div>
    );
  }

  }

export default App;
        
