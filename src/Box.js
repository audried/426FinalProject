import React, { Component } from 'react';
import './App.css';

// this.props.c =
// {
//     "cid":"ASTR101",
//     "name":"Introduction to Astronomy",
//     "hours":1,
//     "GMID": 0
// }

class Box extends Component{
    constructor(props){
        super(props) 
        this.state={
            enrolled:0
        }
        
        this.join = this.join.bind(this);

    }

    componentDidMount(){
        //get group info
        //if GMID: make api request to get # of members
    }

    join(){
        //request to join group
        console.log("join request: "+this.props.c.cid)
        //if GMID: send join request

        //if GMID=0: create group request, set course.GMID
    }
    
    render(){
        return(

            <div className="tile is-parent is-3">
                <article className="tile is-child box">
                    <p className="title">{this.props.c.cid}</p>
                    <p className="subtitle">{this.props.c.name} </p>
                    <p className="subtitle">{this.state.enrolled} in GroupMe</p>
                    <button className="button is-info" id="join" onClick={this.join}>click to join</button>
                </article>
            </div>
            
        )
    }
}
export default Box;