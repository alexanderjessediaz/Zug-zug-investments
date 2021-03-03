import React, {Component} from "react"
import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"
import Jumbotron from "react-bootstrap/Jumbotron"
import Card from "react-bootstrap/Card"
import CardDeck from 'react-bootstrap/CardDeck'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'



class UserProfile extends Component {
    
    state = {
        TotalRevenue: 0,
        TotalPositions: 0,
        UserBuyInPrice: 0,
        UserAssetQuantity: 0,
        BLCurrent: []
        
    }
    
    render(){
        

        return(
            <Jumbotron>
                    <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
                        <Tab eventKey="home" title="Ledger">
                            <Container>
                                <Row>
                                    <Col>
                                        <Card>
                                            <Card.Header>Total Wealth</Card.Header>
                                            <Card.Body>
                                                <Card.Title>5000g</Card.Title>
                                                <Alert variant="success">
                                                    <Alert.Heading>+10g 0.5%</Alert.Heading>
                                                </Alert>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <Card.Header>Gold on Hand</Card.Header>
                                            <Card.Body>
                                                <Card.Title>1000g</Card.Title>
                                                <Alert variant="danger">
                                                    <Alert.Heading>-50g 1%</Alert.Heading>
                                                </Alert>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col>
                                        <Card>
                                            <Card.Header>
                                                Trade Assets
                                            </Card.Header>
                                            <Card.Body>
                                                <Card.Title>500g
                                                </Card.Title>
                                                <Alert variant="success">
                                                    <Alert.Heading>+100g 2.5%</Alert.Heading>
                                                </Alert>
                                            </Card.Body>
                                            
                                        </Card>
                                    </Col>
                                </Row>
                                <Row>
                                    <CardDeck>
                                        <Col>
                                            <Card border="danger">
                                                <Card.Header>Black Lotus</Card.Header>
                                                <Card.Body>
                                                    <Card.Title>BLTS</Card.Title>
                                                    <Alert variant="danger">
                                                        <Alert.Heading>125.3g</Alert.Heading>
                                                        <p>Bought In At: {this.state.UserBuyInPrice}</p>
                                                    </Alert>
                                                </Card.Body>
                                                <Card.Footer>
                                                        <h6>Currently Holding: {this.state.UserAssetQuantity}</h6>
                                                </Card.Footer>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card border="success">
                                                <Card.Header>Moon Cloth</Card.Header>
                                                <Card.Body>
                                                    <Card.Title>MNCH</Card.Title>
                                                    <Alert variant="success">
                                                        <Alert.Heading>20.2g</Alert.Heading>
                                                        <p>Bought In At: {this.state.UserBuyInPrice}</p>
                                                    </Alert>
                                                </Card.Body>
                                                <Card.Footer>
                                                        <h6>Currently Holding: {this.state.UserAssetQuantity}</h6>
                                                </Card.Footer>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card border="success">
                                                <Card.Header>Arcanite Bar</Card.Header>
                                                <Card.Body>
                                                    <Card.Title>ARCbr</Card.Title>
                                                    <Alert variant="success">
                                                        <Alert.Heading>88.2g</Alert.Heading>
                                                        <p>Bought In At: {this.state.UserBuyInPrice}</p>
                                                    </Alert>
                                                </Card.Body>
                                                <Card.Footer>
                                                        <h6>Currently Holding: {this.state.UserAssetQuantity}</h6>
                                                </Card.Footer>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card border="success">
                                                <Card.Header>Arcanite Crystal</Card.Header>
                                                <Card.Body>
                                                    <Card.Title>ARCcr</Card.Title>
                                                    <Alert variant="success">
                                                        <Alert.Heading>70.7g</Alert.Heading>
                                                        <p>Bought In At: {this.state.UserBuyInPrice}</p>
                                                    </Alert>
                                                </Card.Body>
                                                <Card.Footer>
                                                        <h6>Currently Holding: {this.state.UserAssetQuantity}</h6>
                                                </Card.Footer>
                                            </Card>
                                        </Col>
                                    </CardDeck>
                                </Row>
                                <div>
                                    <Badge pill variant="dark">4 of {this.state.TotalPositions} </Badge>{" "}
                                    <Button variant="info" size="sm">View All Positions</Button>
                                </div>
                            </Container>
                    </Tab>
                    <Tab eventKey="profile" title="Position's Table">
                        
                    </Tab>
                </Tabs>
            </Jumbotron>
        )
    }
}

export default UserProfile