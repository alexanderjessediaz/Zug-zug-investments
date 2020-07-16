import React, { Component }  from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const loginURL = "http://localhost:3000/login"

class Login extends Component {

    state = {
        username: "",
        password: "",
        error: ""
    }
    
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault()

        fetch(loginURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        }).then(response =>{
            if (response.status === "200"){
                response.json()
            } else if (response.status === "401") {
                throw new Error("Username or password not correct")
            } 
        })
        .then(result => {
            localStorage.setItem("token", result.token)
        })
        .catch(error => this.setState({ error: error.message}))
        }
    
    
    render(){
        const { username, password} = this.state

        return(
           <Form className="login" onSubmit={this.handleSubmit}>
               <Form.Group controlId="formBasicEmail">
                   <Form.Label>Username</Form.Label>
                   <Form.Control 
                    type="text"
                    name="username"
                    placeholder="enter username" 
                    value={username}
                    onChange={this.handleChange}
                    />
               </Form.Group>
               <Form.Group controlId="formBasicPassword">
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
                   Log in
                   {this.state.error ? <p>{this.state.error}</p>: null}
               </Button>
           </Form>
        )
    }
    
}

export default Login