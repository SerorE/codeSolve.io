import React, { Component } from 'react';
import TextField from './text_field.jsx'
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// import Button from 'react-bootstrap/Button';








class FormBox extends Component {


handleSubmit = (selectedTab) => {
	console.log(`submit clicked , props is ${this.props} selectedTab is ${selectedTab}`);
	this.props.handleNextTab()

}


render() {


	const profileType = this.props.profileType;
	const selectedTab = this.props.selectedTab;
	const loggedIn = this.props.loggedIn;

	// const form = <GetForm profileType ={profileType} loggedIn={false} selectedTab={selectedTab} />;



	const className = `${profileType}-form ${profileType}-form-${selectedTab}`;

	if (profileType === 'asker'){
		switch (selectedTab) {
		case 0:
			return (
	<Form className= {className}>


	<Row form>
        <Col md={6}>
	        <FormGroup >
	          <Label for="name">First Name</Label>
	          <Input type="name" name="name" id="" placeholder="John" />
	        </FormGroup>
	     </Col>

	    <Col md={6}>
	        <FormGroup >
	          <Label for="name">Last Name</Label>
	          <Input type="name" name="name" id="" placeholder="John" />
	        </FormGroup>
	     </Col>
	</Row>

	<Row form>
	    <Col md={6}>
	        <FormGroup>
	          <Label for="exampleEmail">Email</Label>
	          <Input type="email" name="email" id="" placeholder="johndoe@gmail.com" />
	        </FormGroup>
	    </Col>

	     <Col md={6}>
	         <FormGroup>
	          <Label for="examplePassword">Password</Label>
	          <Input type="password" name="password" id="examplePassword" placeholder="strong password" />
	        </FormGroup>
         </Col>
    </Row>

        <Col sm={{ size: 10, offset: 2 }}>
        	<Button outline color="danger" onClick= {() => this.handleSubmit(selectedTab)}> Submit </Button>
        </Col>
     </Form>
				);


		case 1:



return (
	<Form className= {className}>


	<Row form>
        <Col md={6}>
	        <FormGroup >
	          <Label for="name">First Name</Label>
	          <Input type="name" name="name" id="" placeholder="John" />
	        </FormGroup>
	     </Col>

	    <Col md={6}>
	        <FormGroup >
	          <Label for="name">Last Name</Label>
	          <Input type="name" name="name" id="" placeholder="John" />
	        </FormGroup>
	     </Col>
	</Row>

	<Row form>
	    <Col md={6}>
	        <FormGroup>
	          <Label for="exampleEmail">Email</Label>
	          <Input type="email" name="email" id="" placeholder="johndoe@gmail.com" />
	        </FormGroup>
	    </Col>

	     <Col md={6}>
	         <FormGroup>
	          <Label for="examplePassword">Password</Label>
	          <Input type="password" name="password" id="examplePassword" placeholder="strong password" />
	        </FormGroup>
         </Col>
    </Row>

        <Col sm={{ size: 10, offset: 2 }}>
        	<Button outline color="danger" onClick= {() => this.handleSubmit(selectedTab)}> Submit </Button>
        </Col>
     </Form>
				);






		default:
		return null
		}
	} else {
		console.log('not asker');
	}

	// return form; (
	// <Form className= {className}>
	// 	{form}
 //     </Form>

	// 	);

	}

}


export default FormBox;
