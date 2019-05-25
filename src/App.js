import React, { Component } from 'react';
import Navbar from "./Components/Navbar";
import Users from "./Components/Users";
import './App.css';

class App extends Component {
  render() {
    
    return (
      <div className="container">
        <Navbar title="User App"></Navbar>
        <hr></hr>
        <Users></Users>
      </div>
    );
  }
}

export default App;
