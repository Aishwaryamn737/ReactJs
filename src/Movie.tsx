
import React from "react";
import './App.css';
import {LikeButton} from "./LikeButton";

//<Movie movieName = "Jumanji" rating=5 dp='logo.svg'/>

let cssAlignLeft = {marginLeft:'5px'}
export default function Movie(props:any){
    
    return (
        
        <div className = "movie">
            <img src={props.dp} style={cssAlignLeft}/>
            <hr/>
            <strong>{props.movieName}</strong> <LikeButton/>
            <br/>
            <strong>{props.rating}✪</strong>
        </div>
    )
}