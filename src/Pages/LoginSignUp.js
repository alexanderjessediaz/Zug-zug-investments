import React, {Component} from 'react'
import Col from 'react-bootstrap/Col'
import { Form, Button } from 'react-bootstrap'


class LoginPage extends Component {
    
    render(){

        return (
            <Form>
                <Form.Row>
                    <Form.Group as={Col} md="4">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                        required
                        type="text"
                        placeholder="username"
                    />
                    </Form.Group>
                        <Form.Group as={Col} md="4" controlID="validationCustom01">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                            required
                            type="text"
                            placeholder="Your Email"
                            />
                        </Form.Group>
                    <Button type="submit">Submit</Button>
                    </Form.Row>
            </Form>
        )                  
    }
}

export default LoginPage