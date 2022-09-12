import React,{useState} from 'react'
import './App.css';
import Login from './pages/Login'
import Home from './pages/Home'
import Profile from './pages/Profile'
import {LoginContext} from './Helper/Context'

function Gary() {
    const [loggedIn,setLoggedin] = useState(false)
  return (
      <div>
          <h2>Use Context Hook Example 1</h2>
    <LoginContext.Provider value={{loggedIn, setLoggedin}}>
     <Login/>
     <Home/>
     <Profile/>
    </LoginContext.Provider>
    </div>
  )
}

export default Gary