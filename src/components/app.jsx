import React, { Component } from 'react';
import Navbar from './landing/navbar.jsx';
import MainBanner from './landing/main_banner.jsx';
import Steps from './landing/steps.jsx';

import Solvers from './landing/solvers.jsx';
import FormContainer from './form/form_container.jsx';
import firebase from '../config/fbConfig';


class App extends Component {

constructor (props) {
	super(props);


	this.state = {
		profileType: 'none',
		userId: Math.floor(Math.random() * 100000),
		testMode: false,
	}
}


handleClickLanding = (profileType) => {

		if (!this.state.testMode) {

		firebase.database().ref('forms/' + profileType + '/Id - ' + this.state.userId ).set({
		button_pressed : true
		  });

		}




	console.log(`sent to firebase with userId ${this.state.userId}`)
	console.log(`profileType from handleClickLanding yolo is ${profileType}`)
	this.setState ({
		profileType: profileType

	});



}

journeyOver = () => {
		this.setState ({
		profileType: 'none'
	});
}


render() {

	let formContainer;
	let landingClassName;

	if (this.state.profileType === 'none') {
		formContainer = null
		landingClassName = 'landing-container'

	} else {
		formContainer = <FormContainer profileType = {this.state.profileType} userId = {this.state.userId} journeyOver = {this.journeyOver } testMode = {this.state.testMode}/>
		landingClassName = 'landing-container filtered-out'
	}
	// console.log('app gets rendered');
		// const landingClassName = this.state.profileType != 'none' ? 'landing-container filtered-out' : 'landing-container'

		return (
		    <div className = "landing-and-form-container">

			    <div className = {landingClassName} onClick ={() => console.log('landing clicked')} >
			   		<Navbar />
			   		<MainBanner handleClickLanding= {this.handleClickLanding}/>
			   		<Steps />

			   		<Solvers />

			    </div>
			    {formContainer}
		    </div>
			);
	}
}


			   		// <div className="rounded-transition"> </div>


export default App;