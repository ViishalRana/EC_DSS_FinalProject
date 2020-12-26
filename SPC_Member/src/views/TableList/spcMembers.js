import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "../../components/CustomInput/CustomInput";
import CardFooter from "../../components/Card/CardFooter";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={4}>
          <Card>
              <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Add New SPC Member</h4>
              </CardHeader>
              <CardBody>
                  <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                          <CustomInput
                              labelText="Student ID"
                              id="student-id"
                              formControlProps={{
                                  fullWidth: true
                              }}
                          />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={12}>
                          <CustomInput
                              labelText="First Name"
                              id="first-name"
                              formControlProps={{
                                  fullWidth: true
                              }}
                          />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={12}>
                          <CustomInput
                              labelText="Mobile"
                              id="mobile"
                              formControlProps={{
                                  fullWidth: true
                              }}
                          />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={12}>
                          <CustomInput
                              labelText="Email address"
                              id="email-address"
                              formControlProps={{
                                  fullWidth: true
                              }}
                          />
                      </GridItem>
                  </GridContainer>
              </CardBody>
              <CardFooter>
                  <Button color="primary">Add SPC Member</Button>
              </CardFooter>
          </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={8}>
        <Card>
          <CardHeader color="primary">
            <GridContainer>
              <GridItem sm={9}>
                <h4 className={classes.cardTitleWhite}>SPC Members</h4>
              </GridItem>
            </GridContainer>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Sr.No", "Student ID", "Name", "Mobile", "Email"]}
              tableData={[
                ["1","201701022_spc", "Idika Mittal", "9166661024", "idika17mittal@gmail.cmom"],
                ["2","201701035_spc", "Devashish Vachchani", "9166661024", "idika17mittal@gmail.cmom"],
                ["3","201701052_spc", "Rishi Sanghvi", "9166661024", "idika17mittal@gmail.cmom"],
                ["4","201701078_spc", "Samyak Bakliwal", "9166661024", "idika17mittal@gmail.cmom"],
                ["5","201701086_spc", "Abhishek Jishu", "9166661024", "idika17mittal@gmail.cmom"],
                ["6","20170116_spc", "Pragya Maheshwari", "9166661024", "idika17mittal@gmail.cmom"],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
