import React, { Component } from 'react';
import Navbar from "./Components/Navbar";
import Users from "./Components/Users";
import './App.css';

class App extends Component {
  state = {
    users: [
      {
        id : 1,
        name : "Osman",
        surname : "Durdağ",
        state : "Prof. Dr"
      },
      {
        id : 2,
        name : "Fatih",
        surname : "Bodur",
        state : "Prof. Dr"
      },{
        id : 3,
        name : "Mehmet",
        surname : "Kara",
        state : "Öğrenci"
      },
    ]
  }
  render() {
    
    return (
      <div className="container">
        <Navbar title="User App"></Navbar>
        <hr></hr>
        <Users users = {this.state.users}></Users>
      </div>
    );
  }
}

export default App;
