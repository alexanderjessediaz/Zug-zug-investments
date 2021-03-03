import React, { Component }  from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'


const usersURL = "http://localhost:3000/users"

class Signup extends Component {

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

        fetch(usersURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ user: this.state })
        }).then(response => response.json())
            .then(result => {
            localStorage.setItem("token", result.token)
            })
            .catch(error => this.setState({error: error.message}))  
        }
    
    
    render(){
        const { username, password, error} = this.state
        
        return(
        <div>
            <Badge pill variant="secondary">Welcome, sign up here!</Badge>{' '}
            <Form className="singup" onSubmit={this.handleSubmit}>
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
               <Button variant="secondary" type="submit" value="signup">
                   Submit
               </Button>
               <p>{error ? <p>{error}</p>: null}</p>
            </Form>
        </div>
        )
    }
    
}

export default Signup