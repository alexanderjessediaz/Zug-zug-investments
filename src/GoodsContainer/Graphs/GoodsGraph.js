import React, {Component}  from 'react';
import { Jumbotron, Container, Card, Alert} from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import Loader from '../../Components/Loaders/Loader';
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

    displayItemName = () => {
        if (!this.props.nexusData.data) return;
        else return this.props.nexusData.data.name 
        
    }

    noItemAvailable = () => {
        if (!this.props.nexusData.data) return;
            if (this.props.nexusData.data.data.length === 0) {
                
                return (
                <Alert variant="danger">
                    <Alert.Heading>No item's found. Try searching for something else</Alert.Heading>
                    <p>
                        The specific item you were looking for does not exist on this auction house.
                    </p>
                </Alert>
                );
            }; 
    };
    
    
    render(){
        return (
            <Container fluid>
                {this.props.isPriceLoading ? <Loader/>: null}
                {this.noItemAvailable()}
                <Jumbotron fluid>
                        <Card id="graph-card-head" bg="warning">
                            <Card.Header id="graph-card-header">Server and Faction:</Card.Header>
                            <Card.Title id="graph-card-head-title">
                                {this.showCurrentServerandFactionName()}
                            </Card.Title>
                            <Card.Body>
                                <Card.Text id="graph-card-head-text">* Change the Server, Faction, or Item to update the search</Card.Text>
                                <Card.Text id="graph-card-item-name">{"Search Results For: " + this.displayItemName()}</Card.Text>
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
                                    <h5 id="graph-card-footer-title">Previous Week</h5>
                                    <h6 id="graph-card-footer-text">displayed prices in gold</h6>
                                </div>
                            </div>
                        </div>
                </Jumbotron>
            </Container>
        );
    };
};

export default GoodsGraph;