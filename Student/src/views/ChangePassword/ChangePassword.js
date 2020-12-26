import React from "react";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

export default function Maps() {
  return (
    <Card>
      <CardBody>
        <div>
          <h3><b>Change Password</b></h3>
        </div>
        <hr></hr>
        <div>
          <h3>Current Password</h3>
          <input type="password"></input>
        </div>
        <div>
          <h3>New Password</h3>
          <input type="password"></input>
        </div>
        <div>
          <h3>Repeat New Password</h3>
          <input type="password"></input>
        </div>
        <Button color="primary">Update</Button>
      </CardBody>
    </Card>
  );
}
