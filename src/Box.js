import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

// this.props.c =
// {
//     "cid":"ASTR101",
//     "name":"Introduction to Astronomy",
//     "hours":1,
//     "GMID": 0,
//     "share_token":"sgdhhsjh"
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
       axios.post(`https://api.groupme.com/v3/groups/${this.props.c.gmid}/join/${this.props.c.share_token}${this.props.tok}`, {  
       })
      .then(res => console.log(res.data.response));
    }
    
    render(){
        return(

            <div className="tile is-parent is-3">
                <article className="tile is-child box">
                    <p className="title">{this.props.c.id}</p>
                    <p className="subtitle">{this.props.c.name} </p>
                    <p className="subtitle">{this.state.enrolled} in GroupMe</p>
                    <button className="button is-info" id="join" onClick={this.join}>click to join</button>
                </article>
            </div>
            
        )
    }
}
export default Box;