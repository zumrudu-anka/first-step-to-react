import React, { Component } from 'react'
import posed from 'react-pose';

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
        visible:true
    }

    changeVisibility = (e) => {
        this.setState({
            visible : !this.state.visible
        })
    }

    render() {
        const{visible}=this.state;
        return (
            <div className="col-md-8 mb-4">
                <button onClick={this.changeVisibility} class="btn btn-dark btn-block mb-3">{visible ? "Hide Form" : "Show Form"}</button>
                <Animation pose={this.state.visible ? "visible" : "hidden"}>
                    <div className="card">
                        <div className="card-header">
                            <h4>Add User Form</h4>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Enter Name"
                                    class="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="surname">Surname</label>
                                    <input
                                    type="text"
                                    name="surname"
                                    id="surname"
                                    placeholder="Enter Surname"
                                    class="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="degree">Degree</label>
                                    <input
                                    type="text"
                                    name="degree"
                                    id="degree"
                                    placeholder="Enter Degree"
                                    class="form-control"></input>
                                </div>
                                <button class="btn btn-danger btn-block" type="submit">Add User</button>
                            </form>
                        </div>
                    </div>
                </Animation>
            </div>
        )
    }
}
export default AddUser;

