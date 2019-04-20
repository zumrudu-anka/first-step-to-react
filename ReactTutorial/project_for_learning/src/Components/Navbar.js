import React from 'react'
import myprops from 'prop-types'

function Navbar(props) {
  return (
    <div>
      <h3 className="header">{props.title}</h3>
    </div>
  )
}
Navbar.propTypes = {
    title:myprops.string.isRequired
}
Navbar.defaultProps = {
    title: "Default App"
}
export default Navbar;
