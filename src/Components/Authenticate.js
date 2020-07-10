import React, { Component }  from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Authenticate extends Component {

    state = {
        username: "",
        password: ""
    }
    
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }
    
    
    render(){
        const { username, password} = this.state

        return(
           <Form>
               <Form.Group controlID="formBasicEmail">
                   <Form.Label>Username</Form.Label>
                   <Form.Control 
                    type="text"
                    name="username"
                    placeholder="enter username" 
                    value={username}
                    onChange={this.handleChange}
                    />
               </Form.Group>
               <Form.Group controlID="formBasicPassword">
                   <Form.Label>Password</Form.Label>
                   <Form.Control 
                    type="password" 
                    name="password" 
                    placeholder="enter password" 
                    value={password}
                    onChange={this.handleChange}
                    />
               </Form.Group>
               <Button variant="primary" type="submit" value="login">
                   Submit
               </Button>
           </Form>
        )
    }
    
}
export default Authenticate