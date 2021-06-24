import React, {Component}  from 'react';
import { Jumbotron, Container, Card } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import './GoodsGraphStyles.css';

class GoodsGraph extends Component {

    state = {
        data: {
            labels: [],
            datasets: [
                {
                    label: "",
                    backgroundColor: "rgba(255,0,255,0.75)",
                    data: []
                }
            ]
        }
    };

    setGradientColor = (canvas, color) => {
        if(!this.props.nexusData) return;
        else {
            const ctx = canvas.getContext('2d');
            const gradient = ctx.createLinearGradient(0,0,600,550);
            gradient.addColorStop(0, color);
            gradient.addColorStop(0.95, "rgba(130,160,106,0.5");
            return gradient;
        }
    };
  
    getChartData = canvas => {
        if(!this.props.nexusData.data) return;
        else {
            const data = {
                labels: this.createItemPriceLabels(),
                datasets: [
                    {
                        label: `${this.props.nexusData.data.name}`,
                        backgroundColor: "rgba(130,160,106,0.75)",
                        data: this.createItemPriceData()
                    }
                ]
            };
            if(data.datasets) {
                let colors = ["rgba(130,160,106,0.75)","rgba(130,160,106,0.75)"]
                data.datasets.forEach((set, i ) => {
                    set.backgroundColor = this.setGradientColor(canvas, colors[i])
                    set.borderColor = "white"
                    set.borderWidth = 2
                })
            } 
            return data;
        }
    };

    createItemPriceData = () => {
        if(!this.props.nexusData.data) return; 
        else{
            return this.props.nexusData.data.data.map(price => {
                return price.marketValue /10000;
            });
        };
      };

    createItemPriceLabels = () => {
        if(!this.props.nexusData.data) return;
        else {
            return this.props.nexusData.data.data.map(priceObject => {
                const dateAndTimeScanned = {
                    ...priceObject,
                    scannedAt: new Date(priceObject.scannedAt).toString().split(" ")[0] +
                    " " + 
                    new Date(priceObject.scannedAt).toString().split(" ")[4] +
                    " " 
                };
            return dateAndTimeScanned.scannedAt;
            });
        };
      };

    showCurrentServerandFactionName = () => {
        if (!this.props.nexusData.data) return;
        else return this.props.nexusData.data.slug;
    };
    
    render(){
        return (
            <Container fluid>
                <Jumbotron fluid>
                        <Card id="card-graph-head">
                            <Card.Header id="card-graph-header">Current Server and Faction:</Card.Header>
                            <Card.Title id="card-graph-head-title">
                                {this.showCurrentServerandFactionName()}
                            </Card.Title>
                            <Card.Body>
                                <Card.Text id="card-graph-head-text">Change the Server, Faction, or Item to update the search</Card.Text>
                            </Card.Body>
                        </Card>
                        <div className="media" >
                            <div className="media-body" >
                                <div style={{position: "relative", width: "75%", height: "50%", margin:"auto"}}>
                                    <Line options={{
                                            responsive: true
                                        }}
                                        data={this.getChartData}
                                    />
                                    <h5 id="card-graph-footer-title">Previous Week</h5>
                                    <h6 id="card-graph-footer-text">displayed prices in gold</h6>
                                </div>
                            </div>
                        </div>
                </Jumbotron>
            </Container>
        );
    };
};
export default GoodsGraph;