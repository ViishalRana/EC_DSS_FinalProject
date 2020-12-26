import React from 'react';  
import GridItem from "../Grid/GridItem.js";
import GridContainer from "../Grid/GridContainer.js";
import TextField  from "@material-ui/core/TextField/TextField.js"
import Button from "@material-ui/core/Button/Button.js"
import Input from "@material-ui/core/Input/Input.js"
import CheckBox from "@material-ui/core/Checkbox/Checkbox.js"
class FlavorForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          newCompany:{
              company_name:"",
              contact_person_name:"",
              contact_person_mobile:"",
              contact_person_email:"",
              open_for:[],
              drive_start:"",
              drive_end:"",
              offer_type:[],
              locations:"",
              comapany_type:"",
              category:"",
              profile_details:[
              {
                  profile_title:"",
                  ug_min_ctc:"",
                  ug_max_ctc:"",
                  pg_min_ctc:"",
                  pg_max_ctc:"",
                  stipend_details:"",
                  profile_description:"",                
              },
            ],
            job_description_file:"",
            bond_details:"",
            registration_start_date:"",
            registration_end_date:"",
            ug_criteria:"",
            pg_criteria:"",
            comapny_representative:[],
          }
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      //this.handleCompanyName = this.handleCompanyName.bind(this);
    }
    
    handleChange(event) {

    }
  
    handleSubmit(event) {
        document.getElementById("addCompanyFrm").submit();
    }
  
    render() {
      return (
        <GridContainer>
            <GridItem  xs={12} sm={12} md={12}>
                <form id="addCompanyFrm">
                    <GridContainer>
                        <GridItem  xs={4} sm={4} md={4}>
                            <h5>Company Name</h5>                            
                        </GridItem>
                        <GridItem  xs={8} sm={8} md={8}>
                            <Input type="text" style={{width:"100%"}}>
                            </Input>
                        </GridItem>
                    </GridContainer>
                    <br></br>
                    <GridContainer>
                        <GridItem  xs={4} sm={4} md={4}>
                            <h5>Contact Person Name</h5>                            
                        </GridItem>
                        <GridItem  xs={8} sm={8} md={8}>
                            <Input type="text" style={{width:"100%"}}>
                            </Input>
                        </GridItem>
                    </GridContainer>
                    <br></br>
                    <GridContainer>
                        <GridItem  xs={4} sm={4} md={4}>
                            <h5>Company Person Mobile</h5>                            
                        </GridItem>
                        <GridItem  xs={8} sm={8} md={8}>
                            <Input type="text" style={{width:"100%"}}>
                            </Input>
                        </GridItem>
                    </GridContainer>
                    <br></br>                   
                    <GridContainer>
                        <GridItem  xs={4} sm={4} md={4}>
                            <h5>Company Person Email</h5>                            
                        </GridItem>
                        <GridItem  xs={8} sm={8} md={8}>
                            <Input type="text" style={{width:"100%"}}>
                            </Input>
                        </GridItem>
                    </GridContainer>
                    <br></br>
                    <GridContainer>
                        <GridItem  xs={4} sm={4} md={4}>
                            <h5>Open For</h5>                            
                        </GridItem>
                        <GridItem  xs={8} sm={8} md={8}>
                            MScIT<CheckBox color="primary"  inputProps={{ 'aria-label': 'secondary checkbox' }}>
                            </CheckBox>
                            BTech<CheckBox color="primary"  inputProps={{ 'aria-label': 'secondary checkbox' }}>
                            </CheckBox>
                            MTech<CheckBox color="primary"  inputProps={{ 'aria-label': 'secondary checkbox' }}>
                            </CheckBox>
                            MDes<CheckBox color="primary"  inputProps={{ 'aria-label': 'secondary checkbox' }}>
                            </CheckBox>

                        </GridItem>
                    </GridContainer>
                    <br></br>
                    <GridContainer>
                        <GridItem  xs={4} sm={4} md={4}>
                            <h5>Drive Start Date</h5>                            
                        </GridItem>
                        <GridItem  xs={8} sm={8} md={8}>
                            <TextField
                                id="date"
                                type="date"
                                defaultValue=""
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                        </GridItem>
                    </GridContainer>
                    <br></br>
                    <GridContainer>
                        <GridItem  xs={4} sm={4} md={4}>
                            <h5>Drive End Date</h5>                            
                        </GridItem>
                        <GridItem  xs={8} sm={8} md={8}>
                            <TextField
                                id="date"
                                type="date"
                                defaultValue=""
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                        </GridItem>
                    </GridContainer>
                    <br></br>
                    <GridContainer>
                        <GridItem  xs={4} sm={4} md={4}>
                            <h5>Offer Type</h5>                            
                        </GridItem>
                        <GridItem  xs={8} sm={8} md={8}>
                            Internship<CheckBox color="primary"  inputProps={{ 'aria-label': 'secondary checkbox' }}>
                            </CheckBox>
                            Job<CheckBox color="primary"  inputProps={{ 'aria-label': 'secondary checkbox' }}>
                            </CheckBox>
                            Summer Internship<CheckBox color="primary"  inputProps={{ 'aria-label': 'secondary checkbox' }}>
                            </CheckBox>
                        </GridItem>
                    </GridContainer>
                    <GridContainer>
                        <GridItem  xs={12} sm={12} md={12}>
                            <Button  variant="contained" color="primary" onClick={this.handleSubmit}>
                                Add Company
                            </Button>
                        </GridItem>
                    </GridContainer>
                    
                </form>
            </GridItem>
        </GridContainer>        
      );
    }
  }
  export default FlavorForm;