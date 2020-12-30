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
import StudentService from "services/StudentService.js";
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

export default function SummerInternship() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedMScIT: true,
    checkedBTech: true,
    checkedMTech: true,
    checkedMDes: true,
  });

  const [students,setStudents]=React.useState([]);

    StudentService.getAllStudentsBySI().then((res)=>{
        setStudents(res.data);
    });  

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
            <Card>
                <CardBody>
                    <TextField id="search" label="Search" style={{width:'100%'}}>

                    </TextField>
                    <br></br>
                    <br></br>
                    <Row>
                        <Col>
                            CPI:
                        </Col>
                        <Col>
                            <TextField
                            id="lowed-cpi-bound"
                            type="number"
                            defaultValue="0"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            />
                        </Col>
                        <Col style={{textAlign:'center'}}>
                            -
                        </Col>
                        <Col>
                            <TextField
                            id="lowed-cpi-bound"
                            type="number"
                            defaultValue="10"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            />
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={2}>
            <Card>
            <CardHeader>
                <h5>
                    Program
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
        <GridItem xs={12} sm={6} md={2}>
            <Card>
            <CardHeader>
                <h5>
                    Domain
                </h5>
            </CardHeader>
            <CardBody>
                <Row>
                    <Col>
                        IT<input type="checkbox" name="checkedIT" onChange={handleChange}></input>
                    </Col>
                    <Col>
                        EL<input type="checkbox" name="checkedEL" onChange={handleChange}></input>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        CT<input type="checkbox" name="checkedCT" onChange={handleChange}></input>
                    </Col>
                    <Col>
                        Consultancy<input type="checkbox" name="checkedConsultancy" onChange={handleChange}></input>
                    </Col>
                </Row>
            </CardBody>
            </Card>

        </GridItem>
        <GridItem xs={12} sm={6} md={2}>
            <Card>
            <CardHeader>
                <h5>
                    Placement Status
                </h5>
            </CardHeader>
            <CardBody>
                <Row>
                    <Col>
                        Placed<input type="checkbox" name="checkedPlaced" onChange={handleChange}></input>
                    </Col>
                    <Col>
                        Unplaced<input type="checkbox" name="checkedUnplaced" onChange={handleChange}></input>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        PPO<input type="checkbox" name="checkedPPO" onChange={handleChange}></input>
                    </Col>
                </Row>
            </CardBody>
            </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={2}>
            <Card>
            <CardHeader>
                <h5>
                    Program
                </h5>
            </CardHeader>
            <CardBody>
                <Row>
                    <Col>
                            Approved?<Row><Col><input type="checkbox" name="checkedApprovedYes"></input>Yes</Col><Col><input type="checkbox" name="checkedApprovedNo"></input>No</Col></Row>
                    </Col>
                    <Col>
                            Interested?<Row><Col><input type="checkbox" name="checkedInterestedYes"></input>Yes</Col><Col><input type="checkbox" name="checkedInterestedNo"></input>No</Col></Row>
                    </Col>
                </Row>
            </CardBody>
            </Card>

        </GridItem>

        <GridItem xs={12} sm={12} md={12}>
            <Card plain>
            <CardHeader plain color="primary">
                <h4 className={classes.cardTitleWhite}>
                Summer Internship Students (1)
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
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            students.map((row)=>{
                                return(
                                    <TableRow key={row.id}>
                                    <TableCell>{row.stud_id}</TableCell>
                                    <TableCell>{row.stud_fname+" "+ row.stud_lname}</TableCell>
                                    <TableCell>{row.skype_id}</TableCell>
                                    <TableCell>{row.stud_contact}</TableCell>
                                    <TableCell>{row.stud_cur_cpi}</TableCell>
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
