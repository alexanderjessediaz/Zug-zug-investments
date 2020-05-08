import React, {Component}  from 'react'
import { Jumbotron, Container } from 'react-bootstrap'
import { Line } from 'react-chartjs-2'

class Jumbo extends Component {

    state = {
        data: {
            labels: [],
            datasets: [
                {
                    label: "Black Lotus",
                    backgroundColor: "rgba(255,0,255,0.75)",
                    data: []
                }
            ]
        }
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
            labels: this.createBLPriceLabels(),
            datasets: [
                {
                    label: "Black Lotus Price",
                    backgroundColor: "rgba(130,160,106,0.75)",
                    data: this.createBLPriceData()
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
            }
        return data
    }

    createBLPriceData = () => {
        return this.props.BLPriceData.map(price => {
            return price.marketValue /10000
        })
      }

    createBLPriceLabels = () => {
        return this.props.BLPriceData.map(priceObject => {
            const dateAndTimeScanned = {
                ...priceObject,
                scannedAt: new Date(priceObject.scannedAt).toString().split(" ")[0] +
                " " + 
                new Date(priceObject.scannedAt).toString().split(" ")[4] +
                " " 
            }
           return dateAndTimeScanned.scannedAt
        })
      }
    
    render(){
        return (
            <Jumbotron>
                <Container>
                    <h1>Zug-Zug Investments</h1>
                    <h4 className="card-header" class="d-flex justify-content-end">Kromcrush Server</h4>
                    <hr class="my-4"></hr>
                    <div class="media">
                        <img 
                            src="https://i.warosu.org/data/tg/img/0457/11/1456740861193.png?__cf_chl_jschl_tk__=845799104caa0759e627f7daf171d3185c85662b-1588805241-0-AXTuzQ3wJ1jkI8n69hcd9QHFxldxsI0gtNnJTLLSOJ_OpWjzlR4edFlr4GIM5TTKwGbwc2RaECZ0tKU3xy6xYWqQnFrXhO9bVpjhv_OtSAu7loaBpI85UyLTrUdagvl-xEtLD31e9_oSdHp7eacwrKieuRabc34htVOW_2SNlFBoZXRviiJcYQ5vSQCmhSn2LSC0JJ5WBMQ5lRvcTbNY0BLI4ulpI1MwJjXlWmkDts6vTbpo7D3rMD0vlmeck7nHWn5Pp3qpHmtWqt6vyE7Y5JINz-7Y8y0Mlg5faUXmgPBIetvyqiZ2W29qX2zvwRQFboQXjZ-GOzDg9dfLDHMbhJQ" 
                            height="350"
                            width="400"
                            alt="orc in suit"
                        />
                        <div class="media-body">
                            <div style={{position: "relative", width: 750, height: 650}}>
                                <Line 
                                    options={{
                                        responsive: true
                                    }}
                                    data={this.getChartData}
                                />
                                <h6 className="chart-footer" class="d-flex justify-content-center">Last 7 days</h6>
                            </div>
                        </div>
                    </div>
                    <h1 class="d-flex justify-content-center">Only the most important World of Warcraft commodities:</h1>
                    <h3 class="d-flex justify-content-center">Current Kromcrush prices</h3>
                    <h5 class="d-flex justify-content-center">updated every ten seconds!</h5>

                </Container>
            </Jumbotron>
        )
    }
}
export default Jumbo