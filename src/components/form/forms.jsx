import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';




class FormAskerOne extends Component {

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
				        </FormGroup>
				     </Col>
				</Row>
    	);
	}
}



class FormAskerTwo extends Component {

	render() {

		return (

			<div>
				<Row form>
				    <Col md={6}>
				        <FormGroup >
				          <Label for="name">Project Title</Label>
				          <Input type="name" name="name" id="" placeholder="John" />
				        </FormGroup>
				     </Col>

					 <Col md={6}>
					        <FormGroup>
					          <Label for="exampleFile">File</Label>
					          <Input type="file" name="file" id="exampleFile" />
					          <FormText color="muted">
					            Upload any needed files.
					          </FormText>
					        </FormGroup>

					 </Col>
				</Row>

				<Row form>
					<FormGroup>
				        <Label for="exampleText">Please describe as precisely as possible</Label>
				        <Input type="textarea" name="text" id="exampleText" />
				    </FormGroup>
				</Row>
			</div>
    	);
	}
}


class FormAskerThree extends Component {

	render() {

		return (

<div>

	<Row form>
		 <Col md={6}>
	        <FormGroup>
	        	<Label for="exampleNumber">Maximum Budget ($)</Label>
	          	<Input
	            type="number"
	            name="number"
	            id="exampleNumber"
	            placeholder="50"
	          />
	         <FormText>We'll take care of the bidding for you.</FormText>
	        </FormGroup>
		 </Col>

		 <Col md={6}>
			<FormGroup>
	          <Label for="exampleDate">Date</Label>
	          <Input
	            type="date"
	            name="date"
	            id="exampleDate"
	            placeholder="01/12/2019"
	          />
	          	 <FormText>A minimum of three days is recommended.</FormText>

	        </FormGroup>
        </Col>

	</Row>

	<Row form>
		<Col md={6}>
	       <FormGroup>
	      <Label for="exampleSelect">Task Category</Label>
          <Input type="select" name="select" id="exampleSelect">
	            <option>Web Development</option>
	            <option>Mobile Development</option>
	            <option>Database</option>
	            <option>Back-end</option>
	           	<option>Algorithm</option>
	          </Input>
	        </FormGroup>
        </Col>

		<Col md={6}>
          	<FormGroup>
	      <Label for="exampleSelect">Programming Language</Label>
          <Input type="select" name="select" id="exampleSelect">
	            <option value="">Select</option>
	            <option>HTML5</option>
	            <option>CSS</option>
	            <option>Rails</option>
	            <option>Javascript</option>
	            <option>Wordpress</option>
	           	<option>PHP</option>
	            <option>Swift</option>
	            <option>Python</option>
	          </Input>
       		</FormGroup>
        </Col>

	</Row>
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

