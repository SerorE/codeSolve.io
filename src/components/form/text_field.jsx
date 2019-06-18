import React, { Component } from 'react';
import { Form } from 'reactstrap';



class TextField extends Component {

render() {

const placeholder = this.props.placeholder


	return (
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

	);




}



}


export default TextField;
