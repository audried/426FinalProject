import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import SearchPage from "./SearchPage";
import Banner from "./Banner";
import classList from './classes.json';

class App extends Component {

  constructor(props){
    super(props)
    this.state={
      classes:classList
    }
  }

  componentDidMount(){
    //get class list here
    //this.setState({classes: classList})
    console.log(this.state.classes)
  }

  render(){
    return (
    <div>
      <div className="BannerContainer">
        <Banner/>
      </div>

      <div className="App container">
        <SearchPage classes={this.state.classes}/>
      </div>

    </div>
      
    );
  }
}

export default App;
