import React, { Component } from 'react'
import posed from 'react-pose';
import UserConsumer from "../context";
import './css/stiller.css';
import axios from "axios";
import App from '../App';

//var uniqid=require('uniqid');

const Animation = posed.div({
    visible:{
        opacity:1,
        applyAtStart : {
            display : "block"
        }
    },
    hidden:{
        opacity:0,
        applyAtEnd : {
            display : "none"
        }
    }
});



export class AddUser extends Component {
    state={
        visible:true,
        name : "",
        surname : "",
        degree : ""
    }

    changeVisibility = (e) => {
        this.setState({
            visible : !this.state.visible
        })
    }

    // changeName = (e) => {
    //     this.setState({
    //         name : e.target.value
    //     }) 
    // }

    // changeSurname = (e) => {
    //     this.setState({
    //         surname: e.target.value
    //     })
    // }

    // changeDegree = (e) => {
    //     this.setState({
    //         degree : e.target.value
    //     })
    // }

    changeInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value // js e özel bir kullanım, etiketin name'ine göre degerini setliyor.
        })
    }

    addUser = async (dispatch,e) => {
        e.preventDefault(); // Formun submit butonuna tıkladığımızda gerçekleştirdiği default aktivitesini engelledik
        const{name,surname,degree} = this.state;
        const newUser = {   // unique id ile yeni bir kullanici olusturduk.
            //id : uniqid(),    // json-server kendisi otomatik id olusturuyor
            name : name,
            surname : surname,
            degree : degree
        }

        const response = await axios.post("http://localhost:3004/users",newUser);

        dispatch({type:"ADD_USER", payload:response.data});
    }

    render() {
        const{visible,name,surname,degree}=this.state;
        return <UserConsumer>
            {
                value => {
                    const{dispatch} = value;
                    return (
                        <div className="AddUserClass">
                            <button onClick={this.changeVisibility} className="btn btn-dark btn-block mb-3">{visible ? "Hide Form" : "Show Form"}</button>
                            <Animation pose={this.state.visible ? "visible" : "hidden"}>
                                <div className="card">
                                    <div className="card-body">
                                        <form onSubmit={this.addUser.bind(this,dispatch)}>
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
                                            <button className="btn btn-danger btn-block" type="submit">Add User</button>
                                        </form>
                                    </div>
                                </div>
                            </Animation>
                        </div>
                    )
                }
            }
        </UserConsumer>

        
        
    }
}
export default AddUser;

