import React, { Component } from 'react';



class Navbar extends Component {

render() {


	// const loggedIn = this.props.loggedIn;

	return (

      <div className="navbar">
        <a className="navbar-brand" href="#">
          <img src="https://codesolve-4122b.firebaseapp.com/images/logo.png" />
        </a>


        <div className="navbar-links">
              <a className="nav-link" href="mailto:elliot@dumtech.io">Contact</a>
        </div>
      </div>
		);


}



}

export default Navbar;


              // <a className="btn btn-primary login-btn" href="#">Log In</a>




              // <a className="nav-link" href="#">About</a>
