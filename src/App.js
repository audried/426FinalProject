import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import SearchPage from "./SearchPage";
import Banner from "./Banner";
import axios from 'axios';

class App extends Component {

  constructor(props){
    super(props)
    this.state={
      classes:[],
      loggedin:false,
      tok: ""
    }
  }

  componentDidMount(){
    //get class list here
    //this.setState({classes: classList})
    if (window.location.search){
      this.setState({loggedin:true, tok: window.location.search});
      axios.get('http://localhost:8080/')
        .then(response => this.setState({classes: response.data}))
    }
    
  }


  render(){
    return (
    <div className="appcontainer">
      <div className="BannerContainer">
        <Banner/>
      </div> 
    
    {!this.state.loggedin &&
      <div className="login">
        <a href = "https://oauth.groupme.com/oauth/authorize?client_id=Rfj6DQHczFqwTDipv0MF6eq9fpK8H3gj9bf4IKuplRB74Esj"> 
          <button className="button is-info" >Sign in with GroupMe</button>
        </a> 
      </div>
    }
      
      
    {this.state.loggedin &&
      <div className="App container">
        <SearchPage classes={this.state.classes} tok = {this.state.tok}/>
      </div>
    }
    </div>
      
    );
  }
}

export default App;
