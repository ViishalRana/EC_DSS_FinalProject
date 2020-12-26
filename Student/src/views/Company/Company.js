import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
// import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

export default function TableList() {
  return (  
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Company Name", "Type" ,"Category", "Criteria", "Placement Date","Open for", "Registration Start Date","Registration End Date","Status","Action"]}
              tableData={[
                ["Amazon","Internship","A1","6","28-12-2020","B.tech,M.sc","24-12-2020","25-12-2020","Open",<div><Button color="primary">Register</Button><Button color="warning">Not interested</Button><Button color="danger">Cancel</Button></div>],
                ["Google","Internship,job","A1","No cirteria","28-12-2020","B.tech,M.sc","24-12-2020","25-12-2020","closed",<div><Button color="primary">Register</Button><Button color="warning">Not interested</Button><Button color="danger">Cancel</Button></div>],
                ["Facebook","Internship","A1","7","28-08-2020","B.tech,M.sc","24-12-2020","25-12-2020","closed",<div><Button color="primary">Register</Button><Button color="warning">Not interested</Button><Button color="danger">Cancel</Button></div>],
                ["Netflix","Internship,job","A1","7","28-07-2020","B.tech,M.sc","24-12-2020","25-12-2020","closed",<div><Button color="primary">Register</Button><Button color="warning">Not interested</Button><Button color="danger">Cancel</Button></div>],
                ["Flipkart","Internship,job","A1","7","25-09-2020","B.tech,M.sc","24-12-2020","25-12-2020","closed",<div><Button color="primary">Register</Button><Button color="warning">Not interested</Button><Button color="danger">Cancel</Button></div>],
                ["Coviam","Internship,job","A","7","23-07-2020","B.tech,M.sc","24-12-2020","25-12-2020","closed",<div><Button color="primary">Register</Button><Button color="warning">Not interested</Button><Button color="danger">Cancel</Button></div>],
                ["MAQ software","Internship,job","A","7","18-07-2020","B.tech,M.sc","24-12-2020","25-12-2020","closed",<div><Button color="primary">Register</Button><Button color="warning">Not interested</Button><Button color="danger">Cancel</Button></div>],
                ["Morgan Stanely","Job","A1","7.5","8-07-2020","B.tech,M.sc","24-12-2020","25-12-2020","closed",<div><Button color="primary">Register</Button><Button color="warning">Not interested</Button><Button color="danger">Cancel</Button></div>]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
