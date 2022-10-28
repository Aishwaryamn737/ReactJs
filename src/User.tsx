import React from "react";
import './App.css';

let cssAlignLeft = {marginLeft:'5px'}
export default function User(props:any){
    return (
        
        <div className = "user">
            <img src={props.dp} style={cssAlignLeft}/>
            <hr/>
            <input type='text' value={props.userName}/>
            <br/>
            <input type='password' value={props.pwd}/>
            <br/>
            <button>Login</button>
        </div>
    )
}