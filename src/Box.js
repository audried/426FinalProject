import React, { Component } from 'react';
import './App.css';

// this.props.c =
// {name: "comp411",
//  enrolled: 400,
//  groupme: 130}

class Box extends Component{
    constructor(props){
        super(props)
        this.state={
            
        }
        
        this.join = this.join.bind(this);

    }

    join(){
        //request to join group
    }
    
    render(){
        return(

            <div className="tile is-parent is-3">
                <article className="tile is-child box">
                    <p className="title">{this.props.c.name}</p>
                    <p className="subtitle">{this.props.c.enrolled} enrolled</p>
                    <p className="subtitle">{this.props.c.groupMe} in GroupMe</p>
                    <button className="button is-info">click to join</button>
                </article>
            </div>
            
        )
    }
}
export default Box;