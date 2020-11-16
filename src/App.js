import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import { Link, BrowserRouter, Route } from 'react-router-dom';
import Search from "./Search"


class App extends Component {
  render(){
    return (
      <div className="App container">
        <Search/>
      </div>
    );
  }
}

export default App;
