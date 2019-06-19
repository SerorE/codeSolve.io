import React, { Component } from 'react';
import Navbar from './landing/navbar.jsx';
import CtaBanner from './landing/cta_banner.jsx';
import StepsBanner from './landing/steps_banner.jsx';

import HeadsBanner from './landing/heads_banner.jsx';
import FormContainer from './form/form_container.jsx';
import firebase from '../config/fbConfig';


class App extends Component {

constructor (props) {
	super(props);


	this.state = {
		profileType: 'none'
	}
}


handleClickLanding = (profileType) => {
	console.log(`profileType from handleClickLanding is ${profileType}`)
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
		formContainer = <FormContainer profileType = {this.state.profileType} userId = {this.state.userId} journeyOver = {this.journeyOver }/>
		landingClassName = 'landing-container filtered-out'
	}
	// console.log('app gets rendered');
		// const landingClassName = this.state.profileType != 'none' ? 'landing-container filtered-out' : 'landing-container'

		return (
		    <div >

			    <div className = {landingClassName} onClick ={() => console.log('landing clicked')} >
			   		<Navbar />
			   		<CtaBanner handleClickLanding= {this.handleClickLanding}/>
			   		<StepsBanner />

			   		<HeadsBanner />

			    </div>
			    {formContainer}
		    </div>
			);
	}
}


			   		// <div className="rounded-transition"> </div>


export default App;