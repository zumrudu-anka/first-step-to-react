import React, { Component } from 'react'
import User from "./User";

class Users extends Component {
  render() {
      const {users}=this.props;
      return (
      <div>
        {
            users.map(user => {
                return(
                    <User 
                        key = {user.id}
                        name = {user.name}
                        surname = {user.surname}
                        state = {user.state}></User>
                )
            })
        }
      </div>
    )
  }
}
export default Users;
