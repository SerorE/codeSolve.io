import React, { Component } from 'react';



class Navbar extends Component {

render() {


	// const loggedIn = this.props.loggedIn;

	return (

      <div className="navbar">
        <a className="navbar-brand" href="#">
          <img src="./src/images/logo.png" />
        </a>


        <div className="navbar-links">
        <div ></div>
              <a className="nav-link" href="#">About</a>
              <a className="nav-link" href="#">Contact</a>

        </div>
      </div>
		);


}



}

export default Navbar;


              // <a className="btn btn-primary login-btn" href="#">Log In</a>




