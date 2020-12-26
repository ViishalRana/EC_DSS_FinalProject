import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "@material-ui/core/Table/Table";
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import TextField from "@material-ui/core/TextField/TextField.js";
import { Col, Row, Form } from "react-bootstrap";
import Button from "@material-ui/core/Button/Button.js"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup'
import { Link } from "react-router-dom";
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

export default function Companies() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedMScIT: true,
    checkedBTech: true,
    checkedMTech: true,
    checkedMDes: true,
  });

  var rows=[
    {company_id:"1",name:"Tata Consultancy Service",type:"Job",locations:"PAN India",category:"A1",date:"2020-12-28 12:00:00 Monday",profiles:"Systems Engineer (Research & Innovation) (11.5 LPA)",open_for:"BTech, MTech, MscIT",registration_end_date:"2020-12-23 18:00:00",companies_notregistered:"1"},
    ];

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
            <GridContainer>
                <GridItem  xs={12} sm={12} md={2}>
                <Link to="/admin/addCompany">
                <Button variant="outlined" color="primary">
                    Add Company
                </Button>
                </Link>
                </GridItem>
            </GridContainer>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
            <Card>
                <CardBody>
                    <Row>
                        <Col>
                            <TextField id="search" label="Search" style={{width:'100%'}}>
                            </TextField>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <TextField id="lcoation" label="Location" style={{width:'100%'}}>
                            </TextField>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={2}>
            <Card>
            <CardHeader>
                <h5>
                    Open For
                </h5>
            </CardHeader>
            <CardBody>
                <Row>
                    <Col>
                        BTech<input type="checkbox" name="checkedBTech" onChange={handleChange}></input>
                    </Col>
                    <Col>
                        MScIT<input type="checkbox" name="checkedMScIT" onChange={handleChange}></input>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        MTech<input type="checkbox" name="checkedMTech" onChange={handleChange}></input>
                    </Col>
                    <Col>
                        MDes<input type="checkbox" name="checkedMDes" onChange={handleChange}></input>
                    </Col>
                </Row>
                
            </CardBody>
            </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
            <Card>
            <CardHeader>
                <h5>
                    Offer Type
                </h5>
            </CardHeader>
            <CardBody>
                <Row>
                    <Col>
                        Internship<input type="checkbox" name="checkedIT" onChange={handleChange}></input>
                    </Col>
                    <Col>
                        Job<input type="checkbox" name="checkedEL" onChange={handleChange}></input>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Summer Internship<input type="checkbox" name="checkedCT" onChange={handleChange}></input>
                    </Col>
                </Row>
            </CardBody>
            </Card>

        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
            <Card>
            <CardHeader>
                <h5>
                    Program
                </h5>
            </CardHeader>
            <CardBody>
                <Row>
                    <Col>
                            Category?<Row><Col><input type="checkbox" name="checkedApprovedYes"></input>A1</Col><Col><input type="checkbox" name="checkedApprovedNo"></input>A</Col></Row>
                    </Col>
                    <Col>
                            Offer  Letter?<Row><Col><input type="checkbox" name="checkedInterestedYes"></input>Yes</Col><Col><input type="checkbox" name="checkedInterestedNo"></input>No</Col></Row>
                    </Col>
                </Row>
            </CardBody>
            </Card>

        </GridItem>

        <GridItem xs={12} sm={12} md={12}>
            <Card plain>
            <CardHeader plain color="primary">
                <h4 className={classes.cardTitleWhite}>
                    Companies
                    <Button style={{float:'right'}} color="success" disableElevation>
                        Export
                    </Button>
                </h4>
            </CardHeader>
            <CardBody>
                {/* <Table
                tableHeaderColor="primary"
                tableHead={["ID", "Name", "Skype ID", "Mobile No", "CPI", "Status","Eligible", "Registered","Not Registered"]}
                tableData={[
                    ["201912017", "Vishal Rana", "ranav8279", "8877996655", "7.43","Placed","17","16","1"],
                    ["201912017", "Vishal Rana", "ranav8279", "8877996655", "7.43","Placed","17","16","1"],
                    ["201912017", "Vishal Rana", "ranav8279", "8877996655", "7.43","Placed","17","16","1"],
                    ["201912017", "Vishal Rana", "ranav8279", "8877996655", "7.43","Placed","17","16","1"],
                    ["201912017", "Vishal Rana", "ranav8279", "8877996655", "7.43","Placed","17","16","1"],
                    ["201912017", "Vishal Rana", "ranav8279", "8877996655", "7.43","Placed","17","16","1"],
                    ["201912017", "Vishal Rana", "ranav8279", "8877996655", "7.43","Placed","17","16","1"],
                ]}
                /> */}
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Location(s)</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Campus Visit</TableCell>
                            <TableCell>Profiles</TableCell>
                            <TableCell>Open For</TableCell>
                            <TableCell>Registration End Date</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            rows.map((row)=>{
                                return(
                                    <TableRow key={row.company_id}>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.type}</TableCell>
                                    <TableCell>{row.locations}</TableCell>
                                    <TableCell>{row.category}</TableCell>
                                    <TableCell>{row.date}</TableCell>
                                    <TableCell>{row.profiles}</TableCell>
                                    <TableCell>{row.open_for}</TableCell>
                                    <TableCell>{row.registration_end_date}</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>  
                                );
                            })
                        }
                    </TableBody>
                </Table>
            </CardBody>
            </Card>
        </GridItem>
    </GridContainer>
  );
}
