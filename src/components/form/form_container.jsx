import React, { Component } from 'react';
import ProgressBar from "./progress_bar.jsx"
import FormBox from "./form_box.jsx"



// function FormBox (props) {
// 	console.log(`fct called, props is ${props.showing}`)
// 	if (props.showing === 'asker') {
// 		return <AskerBox />
// 	} else if (props.showing === 'solver') {
// 		return <SolverBox />
// 	} else {
// 		return null
// 	}
// }



class FormContainer extends Component {

	constructor (props) {
	super(props);

		this.state = {
			selectedTab: 0
		}
	}


	handleNextTab = () => {

	const currentSelectedTab = this.state.selectedTab;

if (this.props.profileType === 'asker') {

		if ( currentSelectedTab !== 2) {
		this.setState ({
			selectedTab: currentSelectedTab + 1
		});
	} else {
		this.props.journeyOver();
	}


} else {
			this.props.journeyOver();
}

}


render() {

		const profileType = this.props.profileType;
			console.log(`profileType from form container is is ${profileType}`)


	if (profileType === 'none') {
			return null;
		}

	return (
      <div className="form-container">
	      <ProgressBar profileType = {profileType} loggedIn = {false} selectedTab = {this.state.selectedTab}/>
	      <FormBox profileType = {profileType} loggedIn = {false} selectedTab = {this.state.selectedTab} handleNextTab = {this.handleNextTab}/>
      </div>
		);

	}

}

export default FormContainer;


