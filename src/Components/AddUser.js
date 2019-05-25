import React, { Component } from 'react'

export class AddUser extends Component {
    render() {
        return (
            <div className="col-md-8 mb-4">
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
        )
    }
}
export default AddUser;

