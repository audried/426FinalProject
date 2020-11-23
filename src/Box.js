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
            enrolled:0,
            joined:0
        }
        this.join = this.join.bind(this);
    }

    componentDidMount(){
    
        if (this.props.groupinfo){
            console.log(this.props.groupinfo)
            if (this.props.groupinfo.length>0){
                this.setState({joined:1})
               
            }
            
        }
    }


    join(){  
       axios.post(`https://api.groupme.com/v3/groups/${this.props.c.gmid}/join/${this.props.c.share_token}${this.props.tok}`, {  
       })
      .then(res => console.log(res.data.response));
      this.setState({joined:1})
    }
    
    render(){
        return(

            <div className="tile is-parent is-4">
                <article className="tile is-child box">
                    <p className="title">{this.props.c.id}</p>
                    <p className="subtitle">{this.props.c.name} </p>
                    

                    {this.state.joined==1 && this.props.groupinfo &&this.props.groupinfo.length>0 && <p className="subtitle">{this.props.groupinfo[0].members.length} in GroupMe</p>}

                    {this.state.joined==0 && <button className="button is-info" id="join" onClick={this.join}>click to join</button>}
                    {this.state.joined==1 && <button className="button " id="joined" >joined</button>}
                </article>
            </div>
            
        )
    }
}
export default Box;