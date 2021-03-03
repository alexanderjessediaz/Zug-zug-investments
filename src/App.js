import React, { Component } from 'react'
import CommoditiesTable from "./Components/CommoditiesTable.js"
import MainNavbar from "./Components/MainNavbar.js"
import BlackLotusGraph from './Components/BlackLotusGraph.js'
// import Authenticate from './Components/Authenticate'
import UserDashboard from './Components/UserDashboard'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


class App extends Component {

  state = {
    BLCurrent: [],
    BLPriceData: [],
    MCCurrent: [],
    ABCurrent: [],
    WCCurrent:[]
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
            BLCurrent:blackLotusObject.data.stats.current,
            BLPriceData:blackLotusObject.BLPriceData.data
          })))
          .catch((error) => {
            console.error(error)
          })
      }
      async getMoonclothData(){
        
        fetch("http://localhost:9000/MoonCloth", {method: "GET"})
          .then((response) => response.json())
          .then((moonclothObject => this.setState({
            MCCurrent:moonclothObject.data.stats.current
          })))
          .catch((error) => {
            console.error(error)
          })
      }
      async getArcaniteBarData(){
        
        fetch("http://localhost:9000/ArcaniteBar", {method: "GET"})
          .then((response) => response.json())
          .then((arcaniteBarData => this.setState({
            ABCurrent:arcaniteBarData.data.stats.current
          })))
          .catch((error) => {
            console.error(error)
          })
      }
      
  
  render () {
    return (
      <Router>
        <div className="App">
        <MainNavbar />
        <Switch>
          {/* <Route exact path="/" component={Authenticate}/> */}
          <Route exact path="/" component={UserDashboard}/>
        </Switch>
        
          <BlackLotusGraph 
            BLCurrent={this.state.BLCurrent}
            BLPriceData={this.state.BLPriceData}
            />
          <CommoditiesTable
            MCCurrent={this.state.MCCurrent}
            BLCurrent={this.state.BLCurrent}
            ABCurrent={this.state.ABCurrent}
            WCCurrent={this.state.WCCurrent}
            />
          </div>
      </Router>
    )
  }

  }

export default App
        
