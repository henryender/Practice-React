import React, {useContext} from 'react'
import {LoginContext} from '../Helper/Context'
//the .. means its on a different folder

function Login() {
 const {loggedIn, setLoggedin} = useContext(LoginContext)

 function HandleState(){
     setLoggedin(!loggedIn)
 }
  return (
    <div>
        This is a login Page<button onClick={HandleState}>
            Click</button>
            
        {loggedIn? <h2>You are Loggedin</h2>: <h2>You are not LoggedIn</h2>}
    
    </div>
  )
}

export default Login