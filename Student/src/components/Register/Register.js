import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from 'react-bootstrap/Alert';

import "./Register.css";

export default function Register() {
  const [stud_id, setID] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);

  function validateForm() {
    return stud_id.length==9 && email.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="stud_id">
          <Form.Label>Student ID</Form.Label>
          <Form.Control
            autoFocus
            type="numeric"
            value={stud_id}
            onChange={(e) => setID(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Register
        </Button>
        <Alert hidden={show?true:false} variant="danger" onClose={() => setShow(false)} dismissible>
          <p>
            Password has been sent to your email. Please login using that.
          </p>
        </Alert>
        
      </Form>
    </div>
  );
}