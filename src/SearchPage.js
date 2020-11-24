import Axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import Box from './Box';
import axios from 'axios';

class SearchPage extends Component{
    constructor(props){
        super(props)
        this.state={
            value:"",
            searchedclasses:[],
            groups:{}
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
        this.setState({searchedclasses: this.props.classes.filter(c=>c.id.toUpperCase().includes(this.state.value.toUpperCase()))})
        //this.state.value is what is currently typed in box
        //this.props.classes ~will~ be json array of classes 
        
        //TODO: suggestions while typing

        //if we want classes to pop up while typing like coursicle:
        //TODO: set this.state.searchedClasses to classes that meet current search
    }
    // componentDidMount(){
    //     var groups={}
    //     if (this.props.joinedclasses.length >0){
    //         // console.log(typeof this.props.joinedclasses[10].id)
    //         // let filtered = this.props.classes.filter(c=>c.gmid.toString()===this.props.joinedclasses[10].id)
    //         // console.log("MATCH: "+filtered[0].id)
    //         for (let i = 0; i<this.props.classes.length; i++){
    //             let filtered = this.props.joinedclasses.filter(j=>{
    //                 return j.id==(this.props.classes[i].gmid.toString())
    //             })
    //             groups[this.props.classes[i].gmid.toString()] = filtered 
    //         }

    //     }
    // }
    


    handleSubmit(e){
        e.preventDefault();
        //console.log(this.state.value.toUpperCase());
        //should set state of searched classes to ones that match this.state.value
        //this.props.filter (matching this.state.value = searchedclasses)
        this.setState({searchedclasses: this.props.classes.filter(c=>c.id.toUpperCase().includes(this.state.value.toUpperCase()))})
    }
   
    

    render(){
        
        //console.log(typeof this.props.classes[10].gmid)
        
        // let target = this.props.classes[10].gmid
        // if (this.props.joinedclasses.length >0){
        //     let groupinfo = this.props.classes.map(c=> {
        //         this.props.joinedclasses.filter(j=> c.gmid==j.id.toString())[0]
        //     })
        //     console.log(groupinfo)
        // }
        
        
        
        return(
            <div className="homepage">
            
            <div className="field has-addons">
                <div className="control">
                    <input className="input" type="text" id="filler" placeholder="Search for a class" value={this.state.value} onChange={this.handleChange}></input>
                </div>
                <div className="control">
                    <a className="button is-info" id="search" onClick={this.handleSubmit}>Search</a>
                </div>
            </div> 
           

            
            <div className = "boxcontainer tile is-ancestor">
                {this.state.searchedclasses.map(c =>
                    //let a = this.props.joinedclasses.filter(j=> j.id === (c.gmid))
                    <Box c = {c} tok={this.props.tok} groupinfo={this.props.joinedclasses.filter(j=>{return j.id == c.gmid.toString()})}></Box>
                    // if (a.length >0){
                    //     return  <Box c = {c} tok={this.props.tok} groupinfo={a[0]}></Box>
                    // }
                    // else{
                    //     return <Box c = {c} tok={this.props.tok}></Box>
                    // }
                    
                    //console.log(a)
                    // a.length!=0 && <Box c = {c} tok={this.props.tok} groupinfo={a[0]}></Box>
                    // a.length==0 && <Box c = {c} tok={this.props.tok}></Box>

                    
                    //<Box c = {c} tok={this.props.tok}></Box>
                
                    
                )}
            </div>
            <div className="instructions">
                    <br></br>
                    <p className= "textbox" type = "text" id="instruc">Search for a COMP course (i.e. COMP 110, COMP 401, etc.). <br></br> Click the "click to join" button to be added to a GroupMe for that course!</p>
                    <br></br>
                </div>


            </div>
            
        )
    }
}
export default SearchPage;