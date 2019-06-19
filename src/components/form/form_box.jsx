import React, { Component } from 'react';
import { FormAskerOne, FormAskerTwo, FormAskerThree, FormSolverOne } from './forms.jsx'
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import * as firebase from 'firebase'

// import Button from 'react-bootstrap/Button';



class FormBox extends Component {

handleSubmit = (selectedTab) => {
	console.log(`submit clicked , props is ${this.props} selectedTab is ${selectedTab}`);
	this.props.handleNextTab()


	const rootRef = firebase.database().ref().child('react');

}

	render() {


  // firebase.database().ref('users/' + userId).set({
  //   name: "a",
  //   email: "a",
  // });



		console.log('form box rendered');
		const profileType = this.props.profileType;
		const selectedTab = this.props.selectedTab;
		const loggedIn = this.props.loggedIn;
		let form;

		const className = `${profileType}-form ${profileType}-form-${selectedTab}`;
		console.log(`in render selectedTab is ${selectedTab}`);

		if (profileType === 'asker'){
			console.log(`in render here selectedTab is ${selectedTab}`);
			if (selectedTab === 0) {
				form = <FormAskerOne  />
			} else if (selectedTab === 1) {
				form = <FormAskerTwo />
			} else if (selectedTab === 2) {
				form = <FormAskerThree />
			}
		}  else {
			form = <FormSolverOne  />
		}

		// else {
		// 	if (selectedTab === 0) {
		// 		form = form_one
		// 	} else if (selectedTab === 1) {
		// 		form = form_solver_twoi8
		// 	} else if (selectedTab === 2) {
		// 		form = form_solver_three
		// 	}
		// }

		return (
		<Form className= {className}>
			{form}

        	<Button className = "submit-button" color="danger" onClick= {() => this.handleSubmit(selectedTab)}> Submit </Button>


	     </Form>


		); 

	}
}

export default FormBox;
