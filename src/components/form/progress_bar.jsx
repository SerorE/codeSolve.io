import React, { Component } from 'react';
// import SolverLoggedIn from './solver_logged_in.jsx'




class ProgressBar extends Component {

<<<<<<< HEAD


class ProgressBar extends Component {




	function pbeClass (tab) {
		return selectedTab == tab ? 'progress-bar-element selected-element' : 'progress-bar-element'; 
	}


	render() {

	const profileType = this.props.profileType;
	const selectedTab = this.props.selectedTab

	if (profileType == 'asker') {
		return(
	      <div className="progress-bar">
	      <i class="fas fa-times close-button"></i>
	            <div className={pbeClass(0)}>
	            	<h2>Sign Up </h2>
	      		</div>
	      		<div className={pbeClass(1)}>
	      			<h2>Describe the Issue </h2>
	      		</div>
	      		 <div className={pbeClass(2)}>
	      		 	<h2>Help Us Match You </h2>
	      		</div>

	      </div>
		);

	} else {
		return (
	      <div className="progress-bar">
	      <i class="fas fa-times close-button"></i>
	            <div className={pbeClass(1)}>
	      		</div>
	            <div className={pbeClass(0)}>
	            	<h2>Sign Up </h2>
	      		</div>
	      </div>
			);
		}
	}

}


export default ProgressBar;
