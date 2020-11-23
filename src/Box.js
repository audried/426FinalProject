import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

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
        //console.log("join request: "+this.props.c.cid)
        //if GMID: send join request
        axios.post(`https://api.groupme.com/v3/groups${this.props.tok}`, {
            "name": this.props.c.id,
            "share": true,
            "image_url": "https://i.groupme.com/123456789"
        })
       .then(res => console.log(res.data.response.id));
       



        //if GMID=0: create group request, set course.GMID
        // axios.put('http://localhost:8080/COMP130', { data:{}, query:{gmid: 12345}})
        // axios.put('http://localhost:8080/COMP140?gmid=12345')
        // .then(res => console.log(res))

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