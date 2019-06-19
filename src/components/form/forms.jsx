import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';




class FormAskerOne extends Component {


  constructor(props) {
    super(props);
    this.state = {
    	1: {
    		name: "",
    		email:""
    	}
    };


  }






	handleChange = (event) => {
		this.setState(
			{name: event.target.value}
			);


	}

	render() {

		return (


    	);
	}
}



class FormAskerTwo extends Component {

	render() {

		return (


    	);
	}
}


class FormAskerThree extends Component {

	render() {

		return (

<div>

	
</div>

    	);
	}
}


class FormSolverOne extends Component {

	render() {

		return (

			<Row form>
			        <Col md={6}>
				        <FormGroup >
				          <Label for="name">First & last name</Label>
				          <Input type="name" name="name" id="" placeholder="John Doe" />
				        </FormGroup>
				     </Col>

				    <Col md={6}>
				        <FormGroup >
				          <Label for="name">Email</Label>
				          <Input type="email" name="name" id="" placeholder="johndoe@gmail.com" />
				          <FormText>We'll contact you shortly.</FormText>

				        </FormGroup>
				     </Col>

				</Row>
    	);
	}
}



export {
  FormAskerOne,
  FormAskerTwo,
  FormAskerThree,
  FormSolverOne
}


	         // <FormText>We do the bidding for you.</FormText>

