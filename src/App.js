import React, { Component } from 'react';
import Users from "./Components/Users";
import AddUser from "./Components/AddUser";
import NotFoundURL from "./Components/NotFoundURL";
import SplitText from 'react-pose-text';
import './App.css';
import {BrowserRouter as Router, Route, Switch,Link} from "react-router-dom";
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


const HomePage = () => {
  return(
    <div>
      <SplitText className="splitTextClass" initialPose="exit" pose="enter" charPoses={charPoses}>
            User Table
      </SplitText>
      <hr></hr>
      <Users></Users>
      <Link to="/add">Add User</Link>
    </div>
    
  )
}

const AddUserPage = () => {
  return(
    <div>
      <SplitText className="splitTextClass" initialPose="exit" pose="enter" charPoses={charPoses}>
          Add User
      </SplitText>
      <hr></hr>
      <AddUser></AddUser>
      <Link to="/">Home Page</Link>
    </div>
    
  )
}

// const NotFoundURL = () => {
//   return (
//     <div>
//       <p>Bulunamadi</p>
//     </div>
//   )
// }

class App extends Component {
  render() {
    
    // <div className="maindiv">
    //       <SplitText className="splitTextClass" initialPose="exit" pose="enter" charPoses={charPoses}>
    //         User Table
    //       </SplitText>
    //     <hr></hr>
    //     <AddUser></AddUser>
    //     <Users></Users>
    //   </div>


    return (
      <Router>
        <div className="maindiv">
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/add" component={AddUserPage}></Route>
            <Route component={NotFoundURL}></Route>
          </Switch>
          
        </div>
      </Router>
    );
  }
}

export default App;
