import React, { Component } from 'react';
import ProgressBar from "./progress_bar.jsx"
import FormBox from "./form_box.jsx"
import * as firebase from 'firebase'




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
			selectedTab: 0,
			userId: Math.floor(Math.random() * 100000)
		}
	}

	incrementTab = () => {
		this.setState ({
					selectedTab: this.state.selectedTab + 1
				});

	}


	handleNextTab = () => {

		const currentSelectedTab = this.state.selectedTab;
		if (this.props.profileType === 'asker') {
			switch(currentSelectedTab) {
				case 0:
					console.log('page 0 submitted');
					console.log(`currentSelectedTab is ${currentSelectedTab}`)
					this.incrementTab();
					break;
				case 1:
					console.log('page 1 submitted');
					console.log(`currentSelectedTab is ${currentSelectedTab}`);
					this.incrementTab();
					break;
				case 2:
					console.log('page 2 submitted');
					console.log(`currentSelectedTab is ${currentSelectedTab}`);
					this.props.journeyOver();
					break;
				default:
					break;
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
	      <FormBox profileType = {profileType} loggedIn = {false} selectedTab = {this.state.selectedTab} userId = {this.state.userId} handleNextTab = {this.handleNextTab}/>
      </div>
		);

	}

}

export default FormContainer;


