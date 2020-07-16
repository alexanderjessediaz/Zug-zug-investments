import React, { Component }  from 'react'
import Login from '../Pages/Login'
import Signup from '../Signup'
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
                    {isLogin ? "Signup?": "Login?"}
                </Button>
            </div>
        )
    }
}
export default Authenticate