import React, { Component }  from 'react'
import Login from '../Pages/Login'
import Signup from '../Signup'


class Authenticate extends Component {
    render(){
        return(
          <div className="authenticate">
              <Signup/>
              <Login/>
          </div>
        )
    }
    
}
export default Authenticate