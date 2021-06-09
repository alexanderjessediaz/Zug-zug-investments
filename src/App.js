import React, { Component } from 'react'
import SelectionNavbar from "./Components/SelectionNavbar"
// import CommoditiesTable from "./Components/CommodityTable/GoodsTable.js"
import GoodsGraph from './Components/Graphs/GoodsGraph.js'
// import {BrowserRouter as Router} from 'react-router-dom'


class App extends Component {

  state = {
    itemPriceData: []
  }

  // timer calls
  componentDidMount(){
    // if (this.state.itemPriceData.length !== 1) return
    // else {
      this.timer = setInterval(()=> this.nexusCall(), 10000)
    // }
  }
      async nexusCall(){
        
        fetch("http://localhost:5555/WowQuery", {method: "GET"})
          .then((response) => response.json())
          .then((QueryObject => {
            console.log("QueryObject:" ,QueryObject)
            this.setState({
              itemPriceData: QueryObject.data
            })
            }))
          .catch((error) => {
            console.error(error)
          })
      }
      // componentWillUnmount
  
  render () {
    return (
        <div className="App">
          <SelectionNavbar nexusCall={this.nexusCall}/>
          <GoodsGraph itemPriceData={this.state.itemPriceData} />
        </div>
    )
  }

  }

export default App
        
