import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import * as firebase from 'firebase'

// import Button from 'react-bootstrap/Button';



class FormBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
		name: "",
		email:"",
		url:"",
		project_title:"",
		project_description:"",
		max_budget:"",
		due_for:"",
		task_cat:"",
		programming_language:""
   };

}



handleSubmit = () => {
	// console.log(`submit clicked , props is ${this.props} selectedTab is ${selectedTab}`);

		const selectedTab = this.props.selectedTab;
		const userId = this.props.userId;
		const profileType = this.props.profileType;



console.log(`userId is ${userId}`);

	switch (selectedTab) {
		case 0:
		  firebase.database().ref('forms/' + profileType + '/Id - ' + userId + '/tab' + selectedTab ).set({
		    name: this.state.name,
		    email: this.state.email
		  });
		break;
		case 1:
		  firebase.database().ref('forms/' + profileType + '/Id - ' + userId + '/tab' + selectedTab ).set({
		    project_title: this.state.project_title,
		    project_description: this.state.project_description
		  });
		  break;
		case 2:
		  firebase.database().ref('forms/' + profileType + '/Id - ' + userId + '/tab' + selectedTab ).set({
		    max_budget: this.state.max_budget,
		    due_for: this.state.due_for,
		   	task_cat: this.state.task_cat,
		    programming_language: this.programming_language
		  });
		  break;

		default:
		break;
	}

	// ref('tab/' + selectedTab)


	this.props.handleNextTab()

}


handleChange = (event) => {
	const name = event.target.id
	const tab = this.props.selectedTab;
	const value = event.target.value

    this.setState({
    	[name]: value
    });
	// console.log(event.target.value);
	// console.log(event.target.id);

}

	render() {


const userId = this.props.userId;
console.log(`userId is ${userId}`);

		const profileType = this.props.profileType;
		const selectedTab = this.props.selectedTab;
		const loggedIn = this.props.loggedIn;
		let form;

		const className = `${profileType}-form ${profileType}-form-${selectedTab}`;
		console.log(`in render selectedTab is ${selectedTab}`);

		if (profileType === 'asker'){


		switch(selectedTab) {
		case 0:
			return (

				<Form className= {className}>

					<Row form>
				        <Col md={6}>
					        <FormGroup >
					          <Label for="name">First & last name</Label>
					          <Input type="name" name="name" placeholder="John Doe" id="name" onChange={this.handleChange}/>
					        </FormGroup>
					     </Col>

					    <Col md={6}>
					        <FormGroup >
					          <Label for="name">Email</Label>
					          <Input type="email" name="name" placeholder="johndoe@gmail.com" id="email" onChange={this.handleChange} />
					        </FormGroup>
					     </Col>
					</Row>

					<Button className = "submit-button" color="danger" onClick= {() => this.handleSubmit()}> Submit </Button>

	     		</Form>

					);
				break;
			case 1:
				return (

				<Form className= {className}>
					<Row form>
					    <Col md={6}>
					        <FormGroup >
					          <Label for="text">Project Title</Label>
					          <Input type="text" placeholder="John" id="project_title" onChange={this.handleChange}/>
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
					        <Input type="textarea" name="text" id="project_description"  onChange={this.handleChange} />
					    </FormGroup>
					</Row>

					<Button className = "submit-button" color="danger" onClick= {() => this.handleSubmit()}> Submit </Button>

	     		</Form>

					);
				break;
			case 2:
				return(

				<Form className= {className}>

				<Row form>
					 <Col md={6}>
				        <FormGroup>
				        	<Label for="exampleNumber">Maximum Budget ($)</Label>
				          	<Input
				            type="number"
				            name="number"
				            placeholder="50"
				            id="max_budget" onChange={this.handleChange}
				          />
				         <FormText>We'll take care of the bidding for you.</FormText>
				        </FormGroup>
					 </Col>

					 <Col md={6}>
						<FormGroup>
				          <Label for="exampleDate">Due for</Label>
				          <Input
				            type="date"
				            name="date"
				            placeholder="01/12/2019"
				            id="due_for"  onChange={this.handleChange}
				          />
				          	 <FormText>A minimum of three days is recommended.</FormText>

				        </FormGroup>
			        </Col>
				</Row>

				<Row form>
					<Col md={6}>
				       <FormGroup>
				      <Label for="exampleSelect">Task Category</Label>
			          <Input type="select" name="select" id="task_cat" onChange={this.handleChange} >
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
			          <Input type="select" name="select" id="programming_language" onChange={this.handleChange}>
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

				<Button className = "submit-button" color="danger" onClick= {() => this.handleSubmit()}> Submit </Button>
	     		</Form>

					);
				break;
			default:
				break;
			}

		} else {
			return (
				<Form className= {className}>
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

				<Button className = "submit-button" color="danger" onClick= {() => this.handleSubmit()}> Submit </Button>
	     		</Form>
				);

		}


	}
}

export default FormBox;
