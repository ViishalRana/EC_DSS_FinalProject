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
import Button from "components/CustomButtons/Button.js"
import TextField from "@material-ui/core/TextField/TextField.js";
import { Col, Row, Form } from "react-bootstrap";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup'
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

export default function A1Offers() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedMScIT: true,
    checkedBTech: true,
    checkedMTech: true,
    checkedMDes: true,
  });

  var rows=[
    {id:"201912017",name:"Vishal Rana",skype_id:"ranav8279",mobile_no:"9988776655",cpi:"8.12",placement_status:"placed",companies_eligible:"17",companies_registered:"16",companies_notregistered:"1"},
    ];

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
            <Card plain>
            <CardHeader plain color="primary">
                <h4 className={classes.cardTitleWhite}>
                Students( A1 Offers ) 1
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
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                    <CardBody>
                        <Row>
                            <Col>Program</Col>
                            <Col>BTech<input type="checkbox" name="checkedBTech"></input></Col>
                            <Col>MScIT<input type="checkbox" name="checkedMScIT"></input></Col>
                            <Col>MTech<input type="checkbox" name="checkedMTech"></input></Col>
                            <Col>MDes<input type="checkbox" name="checkedMDes"></input></Col>
                        </Row>
                    </CardBody>
                    </Card>

                </GridItem>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={6}></TableCell>
                            <TableCell align="center" colSpan={3}>Companies</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Skype ID</TableCell>
                            <TableCell>Mobile NO</TableCell>
                            <TableCell>CPI</TableCell>
                            <TableCell>Placement Status</TableCell>
                            <TableCell>Eligible</TableCell>
                            <TableCell>Registered</TableCell>
                            <TableCell>Not Registered</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            rows.map((row)=>{
                                return(
                                    <TableRow key={row.id}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.skype_id}</TableCell>
                                    <TableCell>{row.mobile_no}</TableCell>
                                    <TableCell>{row.cpi}</TableCell>
                                    <TableCell>{row.placement_status}</TableCell>
                                    <TableCell>{row.companies_eligible}</TableCell>
                                    <TableCell>{row.companies_registered}</TableCell>
                                    <TableCell>{row.companies_notregistered}</TableCell>
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
