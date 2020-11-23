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
            searchedclasses:[]
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
    


    handleSubmit(e){
        e.preventDefault();
        //console.log(this.state.value.toUpperCase());
        //should set state of searched classes to ones that match this.state.value
        //this.props.filter (matching this.state.value = searchedclasses)
        this.setState({searchedclasses: this.props.classes.filter(c=>c.id.toUpperCase().includes(this.state.value.toUpperCase()))})
    }
   
    

    render(){
        //console.log(JSON.stringify(this.state.searchedclasses))
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
                {this.state.searchedclasses.map(c =>{
                    let a = this.props.joinedclasses.filter(j=> j.name === (c.id))
                    if (a.length >0){
                        return  <Box c = {c} tok={this.props.tok} groupinfo={a[0]}></Box>
                    }
                    else{
                        return <Box c = {c} tok={this.props.tok}></Box>
                    }
                    
                    //console.log(a)
                    // a.length!=0 && <Box c = {c} tok={this.props.tok} groupinfo={a[0]}></Box>
                    // a.length==0 && <Box c = {c} tok={this.props.tok}></Box>

                    
                    //<Box c = {c} tok={this.props.tok}></Box>
                }
                    
                )}
            </div>


            </div>
            
        )
    }
}
export default SearchPage;