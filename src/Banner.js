import React, { Component } from 'react';
import './App.css';

class Banner extends Component{
 
    render(){
        return(
            <div className="banner">
                <p>Carolina COMP Course ConnectMe</p>
                <img src="https://coursedesignmatters.files.wordpress.com/2016/12/groupme2012.png?w=640" className="logo"></img>
            </div>
        )
    }
}  
export default Banner;