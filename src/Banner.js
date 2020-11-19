import React, { Component } from 'react';
import './App.css';
import Box from './Box';

class Banner extends Component{
 
    render(){
        return(
            <div className="banner">
                <p>Heel Course ConnectMe</p>
                <img src="https://coursedesignmatters.files.wordpress.com/2016/12/groupme2012.png?w=640" class="logo"></img>
            </div>
        )
    }
}
export default Banner;