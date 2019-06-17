import React, { Component } from 'react';
import TextField from './text_field.jsx'
import { Form } from 'react-bootstrap';




class FormBox extends Component {

	constructor (props) {
	super(props);

		// this.state = {
		// 	selectedTab: 0
		// }
	}



 getForm = ({profileType, loggedIn, selectedTab}) => {

if (profileType === 'asker'){
	switch (selectedTab) {
	case 0:
		return (
			<div>
		      <TextField className = "left-side" fieldTitle = "First Name" placeholder = "John" textMuted = "blabla"/>
		     <TextField className = "left-side" fieldTitle = "Last Name" placeholder = "Doe" textMuted = "blibli"/>
		     </div>
			);
	default:
	return null


		






	}




} else {
	console.log('not asker');



}



	}







render() {


	const profileType = this.props.profileType;
	const selectedTab = this.props.selectedTab;


	const className = `{profileType}-form {profileType}-form-selectedTab`


	return (
      <Form className= {className}>
      		{getForm(this.props)}
      </Form>
		);

	}

}


export default FormBox;