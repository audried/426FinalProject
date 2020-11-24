import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import SearchPage from "./SearchPage";
import Banner from "./Banner";
import axios from 'axios';
import compclasses from './compclasses.json';

class App extends Component {

  constructor(props){
    super(props)
    this.state={
      classes:[],
      loggedin:false,
      tok: "",
      joinedclasses:[]
    }
  }

  componentWillMount(){
    //get class list here
    //this.setState({classes: classList})
    this.setState({classes:compclasses})
    if (window.location.search){
      this.setState({loggedin:true, tok: window.location.search});
      // axios.get('http://localhost:8080/')
      //   .then(response => this.setState({classes: response.data}) )
    }
  }

  componentDidMount(){
    if(this.state.tok.length >1){
      console.log('hi')
      axios.get(`https://api.groupme.com/v3/groups${this.state.tok}`,{'Access-Control-Allow-Origin':'*', params:{per_page:100} })
      .then(res=>this.setState({ joinedclasses:res.data.response  }))
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

{!this.state.loggedin &&
      <div>
         <br></br>
      </div>
  }

    {!this.state.loggedin &&
      <div className="our_mission">
         <br></br>
         <p className= "textbox" type = "text" id="mission">We recognize that the connections, resources, and peer-support that many students benefit from are not accessible to everyone.  <br></br> 
         We celebrate the different circumstances and backgrounds that have led each of you to where you are today: to a community that shares a passion for computer science and cultivates an environment of encouragement and growth. <br></br>
         Now, the connections and support that you need to succeed are more accessible than ever. </p>
         <br></br>
      </div> 
  }
  {!this.state.loggedin &&
      <div>
         <br></br>
      </div>
  }
  {!this.state.loggedin &&

      <div className="instructions">
         <br></br>
         <p className= "textbox" type = "text" id="instruc">Sign into GroupMe to get started. Let's get you connected with your peers!</p>
         <br></br>
      </div>
  }

 
      
      
    {this.state.loggedin &&
      <div className="App container">
        <SearchPage classes={this.state.classes} tok = {this.state.tok} joinedclasses={this.state.joinedclasses}/>
      </div>
    }

    {this.state.loggedin && 
      <div className="our_mission">
                    <br></br>
                    <p className= "textbox" type = "text" id="mission">We recognize that the connections, resources, and peer-support that many students benefit from are not accessible to everyone.  <br></br> 
                    We celebrate the different circumstances and backgrounds that have led each of you to where you are today: to a community that shares a passion for computer science and cultivates an environment of encouragement and growth. <br></br>
                    Now, the connections and support that you need to succeed are more accessible than ever. </p>
                    <br></br>
      </div> 
    }

    {this.state.loggedin &&
      <div>
                    <br></br>
      </div>
    }

    {this.state.loggedin &&
      <div className="instructions">
                    <br></br>
                    <p className= "textbox" type = "text" id="instruc">In the search box above, search for a COMP course (i.e. COMP 110, COMP 401, etc.). <br></br> Click the "click to join" button to be added to a GroupMe for that course with your classmates!</p>
                    <br></br>
      </div>
    }
    </div>
      
    );
  }
}

export default App;
