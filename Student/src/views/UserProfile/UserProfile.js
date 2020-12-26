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

export default function UserProfile() {
    return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardBody>
            <div>
              <h3><b>Welcome Username</b></h3>
            </div>
            <Table
              tableData={[
                [<h4>Student Id:</h4>,<h4>201912090</h4>],
                [<h4>First Name:</h4>,<h4>Vijay</h4>],
                [<h4>Middle Name:</h4>,<h4>kumar</h4>],
                [<h4>Last Name:</h4>,<h4>Chouhan</h4>],
                [<h4>Alternate Email Address:</h4>,<h4>vijaychouhan334@gmail.com</h4>],
                [<h4>Skype Id:</h4>,<h4>live:idfjsklgjfijds</h4>],
                [<h4>Date of Birth:</h4>,<h4>16/01/1972</h4>],
                [<h4>Gender:</h4>,<h4>Male</h4>],
                [<h4>Mobile Number:</h4>,<h4>9235689742</h4>],
                [<h4>Alternate Mobile Number:</h4>,<h4>6955482215</h4>],
                [<h4>Father Name:</h4>,<h4>Deenanath Chouhan</h4>],
                [<h4>Father Mobile Number:</h4>,<h4>6594121218</h4>],
                [<h4>Mother Name:</h4>,<h4>Sita</h4>],
                [<h4>Mother Mobile Number:</h4>,<h4>8596741369</h4>],
                [<h4>Permanent Address:</h4>,<h4>Mandva</h4>],
                [<h4>Current Address:</h4>,<h4>Daiict</h4>],
                [<h4>10th Percentage:</h4>,<h4>67.33</h4>],
                [<h4>12th Percentage:</h4>,<h4>86</h4>],
                [<h4>Graduation Degree:</h4>,<h4>79.63</h4>],
                [<h4>Graduation University:</h4>,<h4>Mohanlal Shukhadia University,Udaipur</h4>],
                [<h4>CPI:</h4>,<h4>6.78</h4>],
                [<h4>Current Backlogs:</h4>,<h4>0</h4>],
                [<h4>Total Backlogs:</h4>,<h4>0</h4>],
                [<h4>Domain:</h4>,<h4>IT</h4>],
                [<h4>Registering for:</h4>,<h4>Final Placement</h4>],
                [<h4>Interested in Placement:</h4>,<h4>Yes</h4>],
                [<h4>Out of Placement Drive:</h4>,<h4>No</h4>],
                [<h4>Resume:</h4>,<h4>Resume file shown here!</h4>]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}         