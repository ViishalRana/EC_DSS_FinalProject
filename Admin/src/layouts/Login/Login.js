import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Register from "components/Register/Register.js"
import Login from "components/Login/Login.js"
import 'bootstrap/dist/css/bootstrap.css';

export default function Auth() {
  return (
    <div className="Login">
      <Tabs justify defaultActiveKey="login" id="uncontrolled-tab-example">
        <Tab eventKey="login" title="Login">
          <Login />
        </Tab>
        <Tab eventKey="register" title="Register">
          <Register />
        </Tab>
      </Tabs>
    </div>
  );
}