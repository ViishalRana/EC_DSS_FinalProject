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
import RESTService from "services/RESTService";

export default function UserProfile() {
  const [profileData,setState]=React.useState({
    data:[]
  });
  
  RESTService.getStudentDataByID().then((res)=>{
    setState({data:res.data});
  });

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
                [<h4>Student Id:</h4>,<h4>{profileData.data.stud_id}</h4>],
                [<h4>First Name:</h4>,<h4>{profileData.data.stud_fname}</h4>],
                [<h4>Middle Name:</h4>,<h4>{profileData.data.stud_mname}</h4>],
                [<h4>Last Name:</h4>,<h4>{profileData.data.stud_lname}</h4>],
                [<h4>DA Email Address:</h4>,<h4>{profileData.data.stud_da_email}</h4>],
                [<h4>Skype Id:</h4>,<h4>{profileData.data.stud_skypeid}</h4>],
                [<h4>Date of Birth:</h4>,<h4>{profileData.data.stud_bday}</h4>],
                [<h4>Gender:</h4>,<h4>{profileData.data.stud_gender}</h4>],
                [<h4>Mobile Number:</h4>,<h4>{profileData.data.stud_contact}</h4>],
                [<h4>Alternate Mobile Number:</h4>,<h4>{profileData.data.stud_alternate_contact}</h4>],
                [<h4>Father Name:</h4>,<h4>{profileData.data.stud_father_name}</h4>],
                [<h4>Father Mobile Number:</h4>,<h4>{profileData.data.stud_father_contact}</h4>],
                [<h4>Mother Name:</h4>,<h4>{profileData.data.stud_mother_name}</h4>],
                [<h4>Permanent Address:</h4>,<h4>{profileData.data.stud_permanant_address}</h4>],
                [<h4>Current Address:</h4>,<h4>{profileData.data.stud_cur_address}</h4>],
                [<h4>10th Percentage:</h4>,<h4>{profileData.data.stud_ssc_per}</h4>],
                [<h4>12th Percentage:</h4>,<h4>{profileData.data.stud_hsc_per}</h4>],
                [<h4>Graduation Degree:</h4>,<h4>{profileData.data.stud_grad_degree}</h4>],
                [<h4>Graduation University:</h4>,<h4>{profileData.data.stud_grad_uni}</h4>],
                [<h4>CPI:</h4>,<h4>{profileData.data.stud_cur_cpi}</h4>],
                [<h4>Current Backlogs:</h4>,<h4>{profileData.data.stud_cur_backlogs}</h4>],
                [<h4>Total Backlogs:</h4>,<h4>{profileData.data.stud_total_backlogs}</h4>],
                [<h4>Registering for:</h4>,<h4>{profileData.data.stud_is_si==1 && <span>Summer Internship</span>}{profileData.data.stud_is_si==0 && <span>Final  Placement</span>}</h4>],
                [<h4>Interested in Placement:</h4>,<h4>{profileData.data.stud_is_interested==1 && <span>Yes</span>}{profileData.data.stud_is_interested==0 && <span>No</span>}</h4>],
                [<h4>Out of Placement Drive:</h4>,<h4>{profileData.data.stud_is_out==1 && <span>Yes</span>}{profileData.data.stud_is_out==0 && <span>No</span>}</h4>],
                [<h4>Resume:</h4>,<h4>{profileData.data.resume}</h4>]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}         