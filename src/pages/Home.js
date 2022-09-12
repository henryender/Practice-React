import React,{useContext} from 'react'
import {LoginContext} from '../Helper/Context'
function Home() {
    const {loggedIn, setLoggedin} = useContext(LoginContext)
    function HandleState(){
        setLoggedin(!loggedIn)
    }
  return (
    <div>
        This is Home Page
        <button onClick={HandleState}>
            Click</button>
            
        {loggedIn? <h2>You are Loggedin</h2>: <h2>You are not LoggedIn</h2>}
    
    </div>
  )
}

export default Home