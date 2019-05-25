import React, { Component } from 'react';
import Users from "./Components/Users";
import AddUser from "./Components/AddUser";
import SplitText from 'react-pose-text';
import './App.css';

const charPoses = {
  exit : { y:40, x:285, opacity: 0},
  enter: {
      y: 10,
      x: 285,
      
      opacity: 1,
      transition: ({charInWordIndex}) => ({
          type: "spring",
          delay: charInWordIndex *30,
          stiffness:500 + charInWordIndex*150,
          damping:10 - charInWordIndex *1
      })
  }
}


class App extends Component {
  render() {
    
    return (
      
      <div className="container">
        <div className="col-md-8 mb-4" >
            <SplitText className="splitTextclass" initialPose="exit" pose="enter" charPoses={charPoses}>
            User Table
          </SplitText>
        </div>
        <hr></hr>
        <AddUser></AddUser>
        <Users></Users>
      </div>
    );
  }
}

export default App;
