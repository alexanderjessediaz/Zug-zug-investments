import React, { Component }  from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'

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
            if (response.status === 200){
                this.setState({ error: ""})
               return response.json()
            } else if (response.status === 401) {
                throw new Error("Username or password not correct")
            } 
        })
        .then(result => {
            localStorage.setItem("token", result.token)
        })
        .catch(error => this.setState({ error: error.message}))
    }
    
    
    render(){
        const { username, password, error} = this.state

        return(
            <div>
                <Badge pill variant="secondary">Zug Zug, log in here!</Badge>{' '}
                
                <Form className="login" onSubmit={this.handleSubmit} >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label></Form.Label>
                    <Form.Control 
                        size="sm"
                        type="text"
                        name="username"
                        placeholder="enter username" 
                        value={username}
                        onChange={this.handleChange}
                        />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label></Form.Label>
                    <Form.Control 
                        size="sm"
                        type="password" 
                        name="password" 
                        placeholder="enter password" 
                        value={password}
                        onChange={this.handleChange}
                        />
                </Form.Group>
                    <Button variant="secondary" type="submit" value="login">
                        Log in
                    </Button>
                    <p>{error ? <p>{error}</p>: null}</p>
                </Form>
           </div>
        )
    }
    
}

export default Login