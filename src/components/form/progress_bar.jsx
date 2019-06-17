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
			return <SolverBarNotLoggedIn />
		} else {
			return <SolverLoggedIn selectedTab = {selectedTab}/>
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
      <div className="progress-bar">
            <div className={pbeClass(0)}>
            	<h2>Sign Up </h2>
      		</div>
      		<div className={pbeClass(1)}>
      			<h2>Describe Issue </h2>
      		</div>
      		 <div className={pbeClass(2)}>
      		 	<h2>Budget & Time Frame </h2>
      		</div>

      </div>
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
