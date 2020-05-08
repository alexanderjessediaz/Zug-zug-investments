import React, {Component} from 'react'
import ChartComponent from "../components/ChartComponent"

export class ChartContainer extends Component {

    state = {
        chartData: []
    }

    componentDidMount(){
        this.timer = setInterval(()=> this.getBlackLotusData(), 10000)
    }
    async getBlackLotusData(){
        fetch("http://localhost:9000/BlackLotus", {method: "GET"})
          .then((response) => response.json())
          .then((blackLotusObject => this.setState({
            chartData:
          })))
          .catch((error) => {
            console.error(error)
          })
      }

    render(){
        return 
    }
}