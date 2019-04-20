import React, { Component } from 'react'
import PropTypes from 'prop-types'

class User extends Component {
  //Default Propslar asagidaki gibi tanimlanacagi gibi bu sekilde de tanimlanabilir.
  /*
  static defaultProps = {
    name : PropTypes.string.isRequired,
    surname : PropTypes.string.isRequired,
    state : PropTypes.string.isRequired
  }
  */
  render() {
    //Destructing
    const {name,surname,state} = this.props;
    // Boylece this.props.name seklinde name ozelligine ulasmak yerine
    // sadece name seklinde ulasabiliyoruz...
    return (
      <div className="col-md-8 mb-4">
          <div className="card">
              <div className="card-header d-flex justify-content-between">
                  <h4 className="d-inline">{name} {surname}</h4>
                  <i className="far fa-trash-alt" style = {{cursor:"pointer"}}></i>
              </div>
              <div className = "card-body">
                  <p className = "card-text"> Ünvan : {state}</p>
              </div>  
          </div>  
      </div>
    )
  }
}
User.defaultProps = {
  name : "Bilgi Yok",
  surname : "Bilgi Yok",
  state : "Bilgi Yok"
}
User.propTypes = {
  name : PropTypes.string.isRequired,
  surname : PropTypes.string.isRequired,
  state : PropTypes.string.isRequired
}
export default User;