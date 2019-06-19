import React, { Component } from 'react';
// import SolverLoggedIn from './solver_logged_in.jsx'


function ProgressBar ({profileType, loggedIn, selectedTab}) {
	console.log(`fct called, profileType is  is ${profileType}, loggedIn is ${loggedIn}, selectedTab is ${selectedTab} `)

	if (profileType == 'asker') {
		if (!loggedIn) {
			console.log('AskerBarNotLoggedIn');
			return <AskerBarNotLoggedIn selectedTab = {selectedTab}/>
		} else {
		console.log('AskerBarLoggedIn');
			return <AskerBarLoggedIn selectedTab = {selectedTab}/>
		}
	} else {
		console.log('not asker');
		if (!loggedIn) {
			return <SolverBarNotLoggedIn selectedTab = {selectedTab}/>
		} else {
			return <SolverLoggedIn selectedTab = {selectedTab}/>
		}
	}
}





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


class AskerBarNotLoggedIn extends Component {

render() {

console.log(`selectedtab props is ${this.props.selectedTab}`)
const selectedTab = this.props.selectedTab;

	function pbeClass (tab) {
		console.log('pbeClass runs')
		return selectedTab == tab ? 'progress-bar-element selected-element' : 'progress-bar-element'; 
	}


	return (

		);

	}

}

class AskerBarLoggedIn extends Component {

render() {

	function pbeClass (tab) {
		console.log('pbeClass runs')
		return props.selectedTab == tab ? 'progress-bar-element selected' : 'progress-bar-element'; 
	}

	return (
      <div className="progress-bar">
      </div>
		);

	}
}

class SolverBarNotLoggedIn extends Component {

render() {

	const selectedTab = this.props.selectedTab;


	function pbeClass (tab) {
		console.log('pbeClass runs')
		return selectedTab == tab ? 'progress-bar-element selected' : 'progress-bar-element'; 
	}


	}
}

class SolverLoggedIn extends Component {

render() {

	function pbeClass (tab) {
		console.log('pbeClass runs')
		return props.selectedTab == tab ? 'progress-bar-element selected' : 'progress-bar-element'; 
	}

	return (
      <div className="progress-bar">
      </div>
		);

	}
}

export default ProgressBar;
