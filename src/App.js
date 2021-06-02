import React, { Component } from 'react'
import SelectionNavbar from "./Components/SelectionNavbar"
// import CommoditiesTable from "./Components/CommodityTable/GoodsTable.js"
// import GoodsGraph from './Components/Graphs/GoodsGraph.js'
// import {BrowserRouter as Router} from 'react-router-dom'


class App extends Component {

  // state = {
  //   BLCurrent: [],
  //   BLPriceData: [],
  //   MCCurrent: [],
  //   ABCurrent: [],
  //   WCCurrent:[]
  // }

  // timer calls
  // componentDidMount(){
  //   this.timer = setInterval(()=> this.getBlackLotusData(), 10000)
  //   this.timer = setInterval(()=> this.getMoonclothData(), 10000)
  //   this.timer = setInterval(()=> this.getArcaniteBarData(), 10000)
  // }
  //     async getBlackLotusData(){
        
  //       fetch("http://localhost:5555/BlackLotus", {method: "GET"})
  //         .then((response) => response.json())
  //         .then((blackLotusObject => this.setState({
  //           BLCurrent:blackLotusObject.data.stats.current,
  //           BLPriceData:blackLotusObject.BLPriceData.data
  //         })))
  //         .catch((error) => {
  //           console.error(error)
  //         })
  //     }
  //     async getMoonclothData(){
        
  //       fetch("http://localhost:5555/MoonCloth", {method: "GET"})
  //         .then((response) => response.json())
  //         .then((moonclothObject => this.setState({
  //           MCCurrent:moonclothObject.data.stats.current
  //         })))
  //         .catch((error) => {
  //           console.error(error)
  //         })
  //     }
  //     async getArcaniteBarData(){
        
  //       fetch("http://localhost:5555/ArcaniteBar", {method: "GET"})
  //         .then((response) => response.json())
  //         .then((arcaniteBarData => this.setState({
  //           ABCurrent:arcaniteBarData.data.stats.current
  //         })))
  //         .catch((error) => {
  //           console.error(error)
  //         })
  //     }
      
  
  render () {
    return (
        <div className="App">
          <SelectionNavbar />
        </div>
    )
  }

  }

export default App
        
