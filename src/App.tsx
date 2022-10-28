import React from 'react';
import logo from './logo.svg';
import './App.css';
import ColorComponent from './StyleBinding';
import Movie from './Movie';
import User from './User';
import { Login, OkToast, ErrorToast } from './LoginWithStates';
import { WithHttp } from './simpleHttp';
import {Navigate, Routes, Route, Router, BrowserRouter, NavLink,useLocation,useParams} from 'react-router-dom'

let C1 = () => {return (<h2>A sub-heading created in component c1</h2>)}

//using databinding in html : {}
let user:any = {username:'admin',pwd:'nimda'}
let C2 = () => {return (<p>Username: {user.username} | Password: {user.pwd}</p>)}

let C3 = () => {return (<img src = {logo}/>)}

let C4 = () => { return(
  <div>
    <input type="text" value={user.username} />
    <br/>
    <input type= 'password' value={user.pwd} />
    <br/>
    <button>Login</button>
  </div>
)}
//Since the function returns html, hence it can be accessed as <App/> inside index.tsx
function App() {
  return (
    <div>
      <BrowserRouter>
      <div>
        <NavLink to='/login'> login </NavLink>
        <span> | </span>
        <NavLink to='/movie'> Movies </NavLink>
        <span> | </span>
        <NavLink to='/http'> Web Api Communication </NavLink>
        <span> | </span>

      </div>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/movie' element={<>  <Movie movieName='Jumanji' rating='5' dp='logo192.png'/>
                                            <Movie movieName='Jumanji - welcome to the jungle' rating='4' dp='logo192.png'/>
                                            <Movie movieName='Jumanji - III' rating='4.5' dp='logo192.png'/></> }/>
          <Route path='/http' element={<WithHttp/>}/> 

        </Routes>
      </BrowserRouter>
    </div>
    // <>
    // <C3/>
    // <h1>Hello React</h1>
    // <hr/>
    // <Login/>
    // <hr/>
    // <WithHttp/>
    // <br/>
    // <C1/>
    // <hr/>
    // <C2/>
    // <hr/>
    // <C4/>
    // <hr/>
    // <ColorComponent/>
    // <hr/>
    // <Movie movieName='Jumanji' rating='5' dp='logo192.png'/>
    // <Movie movieName='Jumanji - welcome to the jungle' rating='4' dp='logo192.png'/>
    // <Movie movieName='Jumanji - III' rating='4.5' dp='logo192.png'/>
    // <hr/>
    // <br/>

    // <User userName = 'Aishwarya' pwd = 'aish' dp='girl.png'/>
    // <User userName = 'Adithi' pwd = 'adi' dp='girl1.png'/>
    // <br/>
    // <hr/>
    // </>
    )
  }


export default App;
