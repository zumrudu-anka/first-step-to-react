import React, { Component } from 'react'
import User from "./User";

class Users extends Component {
  render() {
      return (
      <div>
        {
            users.map(user => {
                return(
                    <User 
                        key = {user.id}
                        id = {user.id}
                        name = {user.name}
                        surname = {user.surname}
                        state = {user.state}
                    />
                        
                )
            })
        }
      </div>
    )
  }
}

export default Users;
