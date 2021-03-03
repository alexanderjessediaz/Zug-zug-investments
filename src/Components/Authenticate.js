import React, { Component }  from 'react'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Button from "react-bootstrap/Button"


class Authenticate extends Component {

    state = {
        isLogin: true
    }

    toggleLoginOrSignup = () => {
        this.setState({ isLogin: !this.state.isLogin})
    }

    render(){
        const { isLogin } = this.state
        return(
            <div className="authenticate">
               {isLogin ? <Login/> : <Signup/>} 
                <Button onClick={this.toggleLoginOrSignup}>
                    {isLogin ? "New? Signup here!": "Login here!"}
                </Button>
            </div>
        )
    }
}
export default Authenticate