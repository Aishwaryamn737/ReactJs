import React from "react";
import './App.css';
import myStyles from './Sample.module.css'

let fontColor : any = {color :'blue',
                        backgroundColor : 'lightblue',
                        fontSize : '20px',
                        padding : '10px',
                        fontWeight : 'bold'};

let ColorComponent = () => {return (
    <>
    <input type='text' value='Some value in blue' style={fontColor}/>
    <input type='text' value='CSS class style without Databinding' className='Sample'/>
    <input type='text' value='CSS class style with data binding . This requires a file called .module.css' className={myStyles.boxStyle}/>
    </>
)}

export default ColorComponent