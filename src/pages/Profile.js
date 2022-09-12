import React, {useContext} from 'react'
import {LoginContext} from '../Helper/Context'

function Profile() {
    const {loggedIn, setLoggedin} = useContext(LoginContext)
    function HandleState(){
        setLoggedin(!loggedIn)
    }
  return (
    <div>This is Profile Page
        <button onClick={HandleState}>
            Click</button>
            

{loggedIn? <h2>You are Loggedin</h2>: <h2>You are not LoggedIn</h2>}
<hr/>
    </div>
  )
}

export default Profile