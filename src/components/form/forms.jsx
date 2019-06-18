import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';




class FormOne extends Component {

	render() {
	<Form inline>

    </Form>


		return (
			<div>



			        <FormGroup>

			<Label for="name">First & Last Name</Label>
			<Input type="name" name="name" id="" placeholder="John Doe" />


        </FormGroup>
        {' '}
        <FormGroup>
          <Label for="exampleEmail" hidden>Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
        </FormGroup>
        {' '}
        <Button className = "submit-button" onClick = {this.props.handleSubmit}>Submit</Button>



				
			 </div>
    );
	}
}


const form_one = (
<div>
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
	          <FormText>We'll never share your email with anyone.</FormText>

	        </FormGroup>
	    </Col>

	     <Col md={6}>
	         <FormGroup>
	          <Label for="examplePassword">Password</Label>
	          <Input type="password" name="password" id="examplePassword" placeholder="strong password" />
	        </FormGroup>
         </Col>
    </Row>


 </div>
    );




const form_asker_two = (
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
		            Upload any files that is needed.
		          </FormText>
		        </FormGroup>

		 </Col>
	</Row>

	<Row form>
		<FormGroup>
	        <Label for="exampleText">Text Area</Label>
	        <Input type="textarea" name="text" id="exampleText" />
	    </FormGroup>
	</Row>

</div>


	);




const form_asker_three = (
<div>

	<Row form>


		 <Col md={6}>
	        <FormGroup>
	        	<Label for="exampleNumber">Maximum Budget</Label>
	          	<Input
	            type="number"
	            name="number"
	            id="exampleNumber"
	            placeholder="50"
	          />
	         <FormText>We do the bidding for you.</FormText>

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
	        </FormGroup>
        </Col>

	</Row>

	<Row form>
		<FormGroup>
	        <Label for="exampleText">Text Area</Label>
	        <Input type="textarea" name="text" id="exampleText" />
	    </FormGroup>
	</Row>
</div>


	);

export {
  FormOne,
  form_asker_two,
  form_asker_three
}


// <Row form>
// 			        <Col md={6}>
// 				        <FormGroup >
// 				          <Label for="name">First Name</Label>
// 				          <Input type="name" name="name" id="" placeholder="John" />
// 				        </FormGroup>
// 				     </Col>

// 				    <Col md={6}>
// 				        <FormGroup >
// 				          <Label for="name">Last Name</Label>
// 				          <Input type="name" name="name" id="" placeholder="John" />
// 				        </FormGroup>
// 				     </Col>
// 				</Row>

// 				<Row form>
// 				    <Col md={6}>
// 				        <FormGroup>
// 				          <Label for="exampleEmail">Email</Label>
// 				          <Input type="email" name="email" id="" placeholder="johndoe@gmail.com" />
// 				          <FormText>We'll never share your email with anyone.</FormText>

// 				        </FormGroup>
// 				    </Col>

// 				     <Col md={6}>
// 				         <FormGroup>
// 				          <Label for="examplePassword">Password</Label>
// 				          <Input type="password" name="password" id="examplePassword" placeholder="strong password" />
// 				        </FormGroup>
// 			         </Col>
// 			    </Row>




