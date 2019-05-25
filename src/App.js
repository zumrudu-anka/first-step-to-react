import React, { Component } from 'react';
import Users from "./Components/Users";
import AddUser from "./Components/AddUser";
import SplitText from 'react-pose-text';
import './App.css';

const charPoses = {
  exit : { y:30, opacity: 0},
  enter: {
      y: 10,
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
      <div className="maindiv">
          <SplitText className="splitTextClass" initialPose="exit" pose="enter" charPoses={charPoses}>
            User Table
          </SplitText>
        <hr></hr>
        <AddUser></AddUser>
        <Users></Users>
      </div>
    );
  }
}

export default App;
