import React, { Component } from 'react';
import User from "./Components/User";
import Navbar from "./Components/Navbar";
import './App.css';

class App extends Component {
  render() {
    
    return (
      <div className="container">
        <Navbar title="User App"></Navbar>
        <hr></hr>
        <User
          name="Osman"
          surname="DURDAĞ"
          state="Prof. Dr."
        ></User>
      </div>
    );
  }
}

export default App;
