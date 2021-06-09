import React, {Component}  from 'react'
import { Jumbotron, Container } from 'react-bootstrap'
import { Line } from 'react-chartjs-2'

class GoodsGraph extends Component {

    state = {
        data: {
            labels: [],
            datasets: [
                {
                    label: "PLACEHOLDER ITEM",
                    backgroundColor: "rgba(255,0,255,0.75)",
                    data: []
                }
            ]
        }
    }

    // remove after testing
    seeData = () => {
        console.log(this.props.itemPriceData)
    }

    setGradientColor = (canvas, color) => {
        const ctx = canvas.getContext('2d')
        const gradient = ctx.createLinearGradient(0,0,600,550)
        gradient.addColorStop(0, color)
        gradient.addColorStop(0.95, "rgba(130,160,106,0.5")
        return gradient
    }

    getChartData = canvas => {
        const data = {
            labels: this.createItemPriceLabels(),
            datasets: [
                {
                    label: "Item Price",
                    backgroundColor: "rgba(130,160,106,0.75)",
                    data: this.createItemPriceData()
                }
            ]
        }
            if(data.datasets) {
                let colors = ["rgba(130,160,106,0.75)","rgba(130,160,106,0.75)"]
                data.datasets.forEach((set, i ) => {
                    set.backgroundColor = this.setGradientColor(canvas, colors[i])
                    set.borderColor = "white"
                    set.borderWidth = 2
                });
            } else {
                return null
            }
        return data
    }

    createItemPriceData = () => {
        if (!this.props.itemPriceData) return 
        else {
         this.props.itemPriceData.map(price => {
            return price.marketValue /10000
        })}
      }

    createItemPriceLabels = () => {
        if (!this.props.itemPriceData) return
        else {
        this.props.itemPriceData.map(priceObject => {
            const dateAndTimeScanned = {
                ...priceObject,
                scannedAt: new Date(priceObject.scannedAt).toString().split(" ")[0] +
                " " + 
                new Date(priceObject.scannedAt).toString().split(" ")[4] +
                " " 
            }
           return dateAndTimeScanned.scannedAt
        })}
      }
    
    render(){
        return (
            <Jumbotron>
                {this.seeData()}
                <Container>
                    <h1>Zug-Zug Investments</h1>
                    <h4 className="card-header">Kromcrush Server</h4>
                    <hr className="my-4"></hr>
                    <div className="media">
                        <div className="media-body">
                            <div style={{position: "relative", width: 750, height: 650}}>
                                <Line 
                                    options={{
                                        responsive: true
                                    }}
                                    data={this.getChartData}
                                />
                                <h6 className="d-flex justify-content-center">Last 7 days</h6>
                            </div>
                        </div>
                    </div>
                </Container>
            </Jumbotron>
        )
    }
}
export default GoodsGraph