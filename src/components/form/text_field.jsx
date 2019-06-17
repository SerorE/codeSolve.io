import React, { Component } from 'react';



class TextField extends Component {

render() {

const placeholder = this.props.placeholder


	return (
  <Form.Group controlId="formBasicEmail">
    <Form.Label>{this.props.fieldTitle}</Form.Label>
    <Form.Control type="email" placeholder= {placeholder} />
    <Form.Text className="text-muted">
    {this.props.textMuted}
      We'll never share your email with anyone else.
    }
    </Form.Text>
  </Form.Group>

	);




}



}


export default TextField;
