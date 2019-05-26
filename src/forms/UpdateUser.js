import React, { Component } from 'react'
import UserConsumer from "../context";
import '../Components/css/stiller.css';
import SplitText from 'react-pose-text';
import axios from "axios";
import {Link} from "react-router-dom";

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

class UpdateUser extends Component {
    state={
        name : "",
        surname : "",
        degree : "",
        error: false
    }

    changeInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value // js e özel bir kullanım, etiketin name'ine göre degerini setliyor.
        })
    }

    componentDidMount = async () => {
        const {id}=this.props.match.params;

        const response= await axios.get(`http://localhost:3004/users/${id}`);
        
        const {name,surname,degree} = response.data;

        this.setState({
            name:name,
            surname:surname,
            degree:degree
        })

    }
    
    validateForm = () =>{
        const{name,surname,degree}=this.state;
        if(name === "" || surname === "" || degree === ""){
            return false;
        }
        return true;
    }

    updateUser = async (dispatch,e) => {
        e.preventDefault(); // Formun submit butonuna tıkladığımızda gerçekleştirdiği default aktivitesini engelledik

        // Update User
        const {id}=this.props.match.params;
        const {name,surname,degree}=this.state;
        
        const updatedUser = {
            name:name,
            surname:surname,
            degree:degree
        }
        
        if(!this.validateForm()){
            this.setState({
                error:true
            })
            return;
        }

        const response = await axios.put(`http://localhost:3004/users/${id}`,updatedUser);

        dispatch({type:"UPDATE_USER",payload:response.data});

        //  Redirect
        this.props.history.push("/");
    }

    render() {
        const{name,surname,degree,error}=this.state;
        return <UserConsumer>
            {
                value => {
                    const{dispatch} = value;
                    return (
                        <div className="AddUserClass">
                                <SplitText className="splitTextClass" initialPose="exit" pose="enter" charPoses={charPoses}>
                                    Update User
                                </SplitText>
                                <br></br>
                                <br></br>
                                <div className="card">
                                    <div className="card-body">
                                        <form onSubmit={this.updateUser.bind(this,dispatch)}>
                                            <div className="form-group">
                                                <label htmlFor="name">Name</label>
                                                <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                placeholder="Enter Name"
                                                className="form-control"
                                                value={name}
                                                onChange = {this.changeInput}
                                                ></input>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="surname">Surname</label>
                                                <input
                                                type="text"
                                                name="surname"
                                                id="surname"
                                                placeholder="Enter Surname"
                                                className="form-control"
                                                value={surname}
                                                onChange = {this.changeInput}
                                                ></input>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="degree">Degree</label>
                                                <input
                                                type="text"
                                                name="degree"
                                                id="degree"
                                                placeholder="Enter Degree"
                                                className="form-control"
                                                value={degree}
                                                onChange = {this.changeInput}
                                                ></input>
                                            </div>
                                            <button className="btn btn-dark btn-block" type="submit">Update User</button>
                                        </form>
                                        {
                                            error ?
                                            <div className="alert alert-danger">
                                                Lütfen Formun Tamamını Doldurunuz...
                                            </div>
                                            : null
                                        }
                                    </div>
                                </div>
                                <Link to="/">Homepage</Link>
                        </div>
                    )
                }
            }
        </UserConsumer>

        
        
    }
}
export default UpdateUser;

