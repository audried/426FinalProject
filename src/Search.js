import React, { Component } from 'react';
import './App.css';


class Search extends Component{
    constructor(props){
        super(props)
        this.state={
            value:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }


    handleSubmit(e){
        e.preventDefault();
        console.log(this.state.value)
    }
   
    render(){
        return(
            
            <div className="field has-addons">
                <div className="control">
                    <input className="input" type="text" placeholder="Search for a class" value={this.state.value} onChange={this.handleChange}></input>
                </div>
                <div class="control">
                    <a class="button is-info" onClick={this.handleSubmit}>Search</a>
                </div>
            </div> 
            
        )
    }
}
export default Search;