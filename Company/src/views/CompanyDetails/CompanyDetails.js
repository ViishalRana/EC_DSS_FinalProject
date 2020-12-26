import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Table from "components/Table/Table.js";
import avatar from "assets/img/faces/marc.jpg";
// import Button from "components/CustomButtons/Button";

export default function UserProfile() {
    return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardBody>
            <div>
              <h3><b>Company Details</b></h3>
            </div>
            <Table
              tableData={[
                [<h4>Company Name:</h4>,<input type="text"/>],
                [<h4>Location:</h4>,<input type="text"/>],
                [<h4>Profile:</h4>,<input type="text"/>],
                [<h4>UG Package:</h4>,<input type="text"/>],
                [<h4>PG Package:</h4>,<input type="text"/>],
                [<h4>Open for:</h4>,<input type="text"/>],
                [<h4>Job Description FIle:</h4>,<input type="file" multiple/>],
                [<h4>Criteria</h4>,<input type="text"/>],
                [<h4>Contact Number:</h4>,<input type="text"/>],
                [<h4>Email:</h4>,<input type="text"/>]
              ]}
            />
            <Button color="primary">Submit</Button>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}         