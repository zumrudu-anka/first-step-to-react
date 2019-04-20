import React, { Component } from 'react'

class User extends Component {
  render() {
    
    //Destructing
    const {name,surname,state} = this.props;
    // Boylece this.props.name seklinde name ozelligine ulasmak yerine
    // sadece name seklinde ulasabiliyoruz...
    return (
      <div>
        <ul>
          <li>İsim : {name}</li>
          <li>Soyisim : {surname}</li>
          <li>Ünvan : {state}</li>
        </ul>
      </div>
    )
  }
}
export default User;