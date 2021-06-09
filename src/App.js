import React, { Component } from 'react'
import SelectionNavbar from "./Components/SelectionNavbar"
// import CommoditiesTable from "./Components/CommodityTable/GoodsTable.js"
import GoodsGraph from './Components/Graphs/GoodsGraph.js'
// import {BrowserRouter as Router} from 'react-router-dom'


class App extends Component {

  state = {
    query : []
  }

  // timer calls
  componentDidMount(){
    this.timer = setInterval(()=> this.getQuery(), 10000)
    // this.timer = setInterval(()=> this.getMoonclothData(), 10000)
    // this.timer = setInterval(()=> this.getArcaniteBarData(), 10000)
  }
      async getQuery(){
        
        fetch("http://localhost:5555/WowQuery", {method: "GET"})
          .then((response) => response.json())
          .then((QueryObject => {
            console.log("QueryObject:" ,QueryObject)
            this.setState({query: QueryObject})
            }))
          .catch((error) => {
            console.error(error)
          })
      }
      // async getFactionQuery(){
        
      //   fetch("http://localhost:5555/FactionQuery", {method: "GET"})
      //     .then((response) => response.json())
      //     .then((factionQueryObject => {
      //       console.log("factionQueryObject:" ,factionQueryObject)
      //       this.setState({factionQuery: factionQueryObject})
      //       }))
      //     .catch((error) => {
      //       console.error(error)
      //     })
      // }

      // componentWillUnmount
  
        
      
  
  render () {
    return (
        <div className="App">
          <SelectionNavbar />
          <GoodsGraph 
          data={this.getQuery}
          
          />
        </div>
    )
  }

  }

export default App
        
