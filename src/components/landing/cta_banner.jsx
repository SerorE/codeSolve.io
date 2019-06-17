import React, { Component } from 'react';



class CtaBanner extends Component {


// const handleClickLanding = 

  handleClick = (profileType) => {
  console.log(`clicked from ${profileType}`);
  this.props.handleClickLanding(profileType);
  // handleClickLanding();
}



render() {

	// const loggedIn = this.props.loggedIn;


	return (
      <div className="banner" >
        <div className="container-banner">

                <h2>Outsource your <strong>small</strong> missions to <strong>great</strong> developpers.</h2>


          <div className="ctas-container">
            <a className="btn btn-primary issue-btn" href="#" onClick = {() => this.handleClick('asker')}>Let's go!</a>
            <a className="btn btn-primary solver-btn" href="#" onClick = {() => this.handleClick('solver')}>Become a solver</a>
          </div>

        </div>
    </div>
		);

}



}

export default CtaBanner;

            // <h1>Your code. Solved. </h1>




