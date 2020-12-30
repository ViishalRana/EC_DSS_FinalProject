import React,{ useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "@material-ui/core/Table/Table.js";
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter";
import Button from "@material-ui/core/Button/Button.js"
import SPCMemberService from "services/SPCMemberService";
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
  const [state, setState] = React.useState({
    spcMember:{
      spc_id:"",
      spc_email:"",
      spc_name:"",
      spc_contact:""
    }
    }
  );
  const [memberList,setMemberList]=React.useState([])

  SPCMemberService.getAllMembers().then((res)=>{
      setMemberList(res.data)
  });
 
  const changeSpcId=(event)=>{
    setState({
      spcMember:{
        spc_id:event.target.value,
        spc_email:state.spcMember.spc_email,
        spc_name:state.spcMember.spc_name,
        spc_contact:state.spcMember.spc_contact
      }
      });
    //alert(state.spcMember.spc_id);
  }

  const changeSpcName=(event)=>{
    let curstate=state;
    setState({
      spcMember:{
        spc_id:state.spcMember.spc_id,
        spc_email:state.spcMember.spc_email,
        spc_name:event.target.value,
        spc_contact:state.spcMember.spc_contact
      }
    });
    //alert(state.spcMember.spc_name);
  }
  const changeSpcEmail=(event)=>{
    let curstate=state;
    setState({
      spcMember:{
        spc_id:state.spcMember.spc_id,
        spc_name:state.spcMember.spc_name,
        spc_email:event.target.value,
        spc_contact:state.spcMember.spc_contact
      }
    });
    //alert(state.spcMember.spc_contact);
  }
  const changeSpcContact=(event)=>{
    let curstate=state;
    setState({
      spcMember:{
        spc_id:state.spcMember.spc_id,
        spc_email:state.spcMember.spc_email,
        spc_name:state.spcMember.spc_name,
        spc_contact:event.target.value
      }
    });
    //alert(state.spcMember.spc_email);
  }

  const handleValidation=()=>{
    let s=state.spcMember;
    let isOk=true;
    if(!s.spc_id){
      alert("SPC ID can not be empty.!");
      isOk=false;
      return isOk;
    }
    else{
      if(!s["spc_id"].match(/^[0-9]{9}_spc$/)){
        isOk = false;
        alert("SPC ID Should be in format:  201912017_spc");
        return isOk;
     } 
    }
    if(!s.spc_name){
      alert("SPC Name can not be empty.!");
      isOk=false;
      return isOk;
    }
    else{
      if(!s["spc_name"].match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/)){
        isOk = false;
        alert("SPC name should only contain letters");
        return isOk;
     } 
    }
    if(!s.spc_email){
      alert("SPC email can not be empty.!");
      isOk=false;
      return isOk;
    }
    else{
      if(!s["spc_email"].match(/^[0-9]{9}@daiict.ac.in$/)){
        isOk = false;
        alert("SPC Email is in wrong format");
        return isOk;
     } 
    }
    if(!s.spc_contact){
      alert("SPC Contact can not be empty.!");
      isOk=false;
      return isOk;
    }
    else{
      if(!s["spc_contact"].match(/^[0-9]{10}$/)){
        isOk = false;
        alert("SPC Contact is in wrong format");
        return isOk;
     } 
    }
    
    return isOk;
  }
  const saveSpcMember=(event)=>{
    event.preventDefault();
//    console.log(state.spcMember);
    let spcm={
      spc_id:state.spcMember.spc_id,
      spc_email:state.spcMember.spc_email,
      spc_name:state.spcMember.spc_name,
      spc_contact:state.spcMember.spc_contact,
      spc_pwd:"123"
    };
    if(handleValidation()){
      console.log("SpcMember=>"+JSON.stringify(spcm));
      SPCMemberService.createSPCMember(spcm).then(res=>{
        alert("added");
      });
    }
  }

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={4}>
        <form>
        <Card>
          <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Add New SPC Member</h4>
          </CardHeader>
          <CardBody>
              <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                      <input
                          placeholder="ID"
                          name="spc_id"
                          type="text"
                          style={{width:"100%",marginTop:"10px"}}
                          value={state.spcMember.spc_id}
                          onChange={changeSpcId}
                      />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                      <input
                          placeholder="Name"
                          name="spc_name"
                          type="text"   
                          style={{width:"100%",marginTop:"10px"}}
                          value={state.spcMember.spc_name}
                          onChange={changeSpcName}
                      />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                      <input
                          name="spc_email"
                          type="mail"
                          id="spc_email"
                          placeholder="Email"
                          style={{width:"100%",marginTop:"10px"}}
                          value={state.spcMember.spc_email}
                          onChange={changeSpcEmail}
                          />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={12}>
                      <input
                          name="spc_contact"
                          type="text"
                          placeholder="Contact"
                          style={{width:"100%",marginTop:"10px"}}
                          value={state.spcMember.spc_contact}
                          onChange={changeSpcContact}
                      />
                  </GridItem>
              </GridContainer>
          </CardBody>
          <CardFooter>
              <Button color="primary" onClick={saveSpcMember}>Add SPC Member</Button>
          </CardFooter>
      </Card>

        </form>
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
          <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Mobile NO</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            memberList.map((row)=>{
                                return(
                                    <TableRow key={row.spc_id}>
                                    <TableCell>{row.spc_id}</TableCell>
                                    <TableCell>{row.spc_name}</TableCell>
                                    <TableCell>{row.spc_email}</TableCell>
                                    <TableCell>{row.spc_contact}</TableCell>
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
