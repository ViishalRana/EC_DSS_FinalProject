import React from 'react';  
import GridItem from "../Grid/GridItem.js";
import GridContainer from "../Grid/GridContainer.js";
import TextField  from "@material-ui/core/TextField/TextField.js"
import Button from "@material-ui/core/Button/Button.js"
import Input from "@material-ui/core/Input/Input.js"
import CheckBox from "@material-ui/core/Checkbox/Checkbox.js"
import CompanyService from "../../services/CompanyService.js"
class FlavorForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          newCompany:{
              company_name:null,
              hr_name:null,
              hr_contact:null,
              open_for:{
                  mscit:"false",
                  btech:"false",
                  mtech:"false",
                  mdes:"false",
              },
              drive_start_date:null,
              drive_end_date:null,
              company_offer_type:{
                  Internship:"false",
                  SummerInternship:"false",
                  Job:"false"
              },
              locations:null,
              comapany_type:null,
              company_category:null,
              profile_details:[
              {
                  profile_title:null,
                  ug_min_ctc:null,
                  ug_max_ctc:null,
                  pg_min_ctc:null,
                  pg_max_ctc:null,
                  stipend_details:null,
                  profile_description:null,                
              },
            ],
            job_description_file:null,
            bond_details:null,
            registration_start_date:null,
            registration_end_date:null,
            ug_criteria:null,
            pg_criteria:null,
            comapny_representative:[],
          }
      };
  
      this.handleCompanyName = this.handleCompanyName.bind(this);
      this.handleContactPersonName = this.handleContactPersonName.bind(this);
      this.handleContactPersonMobile = this.handleContactPersonMobile.bind(this);
      this.handleContactPersonEmail = this.handleContactPersonEmail.bind(this);
      this.handleOpenForMScIT = this.handleOpenForMScIT.bind(this);
      this.handleOpenForBTech = this.handleOpenForBTech.bind(this);
      this.handleOpenForMTech = this.handleOpenForMTech.bind(this);
      this.handleOpenForMDes = this.handleOpenForMDes.bind(this);
      this.handleDriveStartDate = this.handleDriveStartDate.bind(this);
      this.handleDriveEndDate= this.handleDriveEndDate.bind(this);
      this.handleOfferTypeInternship=this.handleOfferTypeInternship.bind(this);
      this.handleOfferTypeSummerInternship=this.handleOfferTypeSummerInternship.bind(this);
      this.handleOfferTypeJob=this.handleOfferTypeJob.bind(this);
      this.handleLocations=this.handleLocations.bind(this);
      this.handleCategory=this.handleCategory.bind(this);
      this.handleBondDetails=this.handleBondDetails.bind(this);
      this.handleRegistrationStartDate = this.handleRegistrationStartDate.bind(this);
      this.handleRegistrationEndDate= this.handleRegistrationEndDate.bind(this);


      this.handleSubmit = this.handleSubmit.bind(this);
      //this.handleCompanyName = this.handleCompanyName.bind(this);
    }
    handleRegistrationStartDate(event){
        let cs=this.state.newCompany;
        cs["registration_start_date"]=event.target.value;
        alert(event.target.value);
    }
    handleRegistrationEndDate(event){
        let cs=this.state.newCompany;
        cs["registration_end_date"]=event.target.value;
        alert(event.target.value);
    }

    handleBondDetails(event){
        let cs=this.state.newCompany;
        cs["bond_details"]=event.target.value;        
        this.setState({newCompany:cs});
    }
    handleCategory(event){
        let cs=this.state.newCompany;
        cs["company_category"]=event.target.value;        
        this.setState({newCompany:cs});
    }

    handleLocations(event){
        let cs=this.state.newCompany;
        cs["locations"]=event.target.value;
        this.setState({newCompany:cs});
    }

    handleOfferTypeJob(event){
        let cs=this.state.newCompany;
        if(cs["company_offer_type"].Job=="true")
            cs["company_offer_type"].Job="false";
        else
            cs["company_offer_type"].Job="true";
        this.setState({newCompany:cs});
    }
    handleOfferTypeSummerInternship(event){
        alert(event.target.value);
        let cs=this.state.newCompany;
        if(cs["company_offer_type"].SummerInternship=="true")
            cs["company_offer_type"].SummerInternship="false";
        else
            cs["company_offer_type"].SummerInternship="true";
        this.setState({newCompany:cs});
    }

    handleOfferTypeInternship(event){
        alert(event.target.value);
        let cs=this.state.newCompany;
        if(cs["company_offer_type"].Internship=="true")
            cs["company_offer_type"].Internship="false";
        else
            cs["company_offer_type"].Internship="true";
        this.setState({newCompany:cs});
    }
    handleDriveStartDate(event){
        let cs=this.state.newCompany;
        cs["drive_start_date"]=event.target.value;
        alert(event.target.value);
    }
    handleDriveEndDate(event){
        let cs=this.state.newCompany;
        cs["drive_end_date"]=event.target.value;
        alert(event.target.value);
    }
    handleOpenForMScIT(event){
        let cs=this.state.newCompany;
        if(cs["open_for"].mscit=="true")
            cs["open_for"].mscit="false";
        else
            cs["open_for"].mscit="true";
        this.setState({newCompany:cs});
    }
    handleOpenForBTech(event){
        let cs=this.state.newCompany;
        if(cs["open_for"].btech=="true")
            cs["open_for"].btech="false";
        else
            cs["open_for"].btech="true";
            this.setState({newCompany:cs});

    }
    handleOpenForMTech(event){
        let cs=this.state.newCompany;
        if(cs["open_for"].mtech=="true")
            cs["open_for"].mtech="false";
        else
            cs["open_for"].mtech="true";
            this.setState({newCompany:cs});

    }
    handleOpenForMDes(event){
        let cs=this.state.newCompany;
        if(cs["open_for"].mdes=="true")
            cs["open_for"].mdes="false";
        else
            cs["open_for"].mdes="true";
            this.setState({newCompany:cs});

    }
    
    handleCompanyName(event) {
        let cs=this.state.newCompany;
        cs["company_name"]=event.target.value;
        this.setState({newCompany:cs});
    }
    handleContactPersonName(event) {
        let cs=this.state.newCompany;
        cs["hr_name"]=event.target.value;
        this.setState({newCompany:cs});
    }
    handleContactPersonMobile(event) {
        let cs=this.state.newCompany;
        cs["hr_contact"]=event.target.value;
        this.setState({newCompany:cs});
    }
    handleContactPersonEmail(event) {
        let cs=this.state.newCompany;
        cs["contact_person_email"]=event.target.value;
        this.setState({newCompany:cs});
    }
  
    handleValidation(){
        let nc=this.state.newCompany;
        let isOk=true;
        console.log(nc.company_offer_type);
        if(!nc.company_name){
            alert("Company Name can not be empty.!");
            isOk=false;
            return isOk;
          }
          else{
            if(!nc["company_name"].match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/)){
              isOk = false;
              alert("HR Name should only contain letters.");
              return isOk;
           } 
          }
          if(!nc.hr_name){
            alert("HR Name can not be empty.!");
            isOk=false;
            return isOk;
          }
          else{
            if(!nc["hr_name"].match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/)){
              isOk = false;
              alert("HR Name should only contain letters.");
              return isOk;
           } 
          }
          if(!nc.drive_start_date){
            alert("Drive Start Date can not be empty.!");
            isOk=false;
            return isOk;
          }
          //console.log((nc.company_offer_type.Internship==true || nc.company_offer_type.SummerInternship==true || nc.company_offer_type.Job==true));
        //   if((nc.company_offer_type.Internship==false && nc.company_offer_type.SummerInternship==false && nc.company_offer_type.Job==false)){
        //     alert("At lease one offer type needs to be selected.!");
        //     isOk=false;
        //     return isOk;
        //   }
        //   else{
        //       if(nc.company_offer_type.Internship==true){
        //       }
        //       if(nc.company_offer_type.Job==true){
        //       }
        //       if((nc.company_offer_type.Internship==false && nc.company_offer_type.Job==false) && nc.company_offer_type.SummerInternship==true){
        //       }
        //       else{
        //         if(nc.company_offer_type.SummerInternship==false){

        //         }
        //         else{
        //             isOk=false;
        //             alert("You can select either Innternship,Job or Summer Internship");
        //             return isOk;                          
        //         }
        //       } 
        //    }
           if(!(nc.company_category=="A" || nc.company_category=="A1")){
               isOk=false;
               alert("Category can be A or A1");
               return isOk;
           }
           if(nc.open_for.btech==false && nc.open_for.mtech==false && nc.open_for.mscit==false && nc.open_for.mdes==false){
               isOk=false;
               alert("Choose at least one in Open For");
           }
           if(nc.hr_contact){
                if(!nc["hr_contact"].match(/^[0-9]{10}$/)){
                    isOk = false;
                    alert("HR Contact should only be 10 digit mobile.");
                    return isOk;
                }
           }

           
          return isOk;

    }
    handleSubmit(event) {
        if(this.handleValidation()){
            let nc=this.state.newCompany;
            this.state.newCompany.company_offer_type="";
            if(nc.company_offer_type.Internship==true){
                this.state.newCompany.company_offer_type="Internship";
            }
            if(nc.company_offer_type.Job==true){
                if(this.state.newCompany.company_offer_type=="")
                this.state.newCompany.company_offer_type="Internship , Job";
                else this.state.newCompany.company_offer_type="Job";
            }
            if(nc.company_offer_type.SummerInternship==true){
                console.log(1);
                this.state.newCompany.company_offer_type="Summer Internship";
            }
            this.state.newCompany.open_for="";
            if(nc.open_for.btech==true){
                this.state.newCompany.open_for="BTech";
            }
            if(nc.open_for.mscit==true){
                if(this.state.newCompany.open_for=="") this.state.newCompany.open_for="BTech , MScIT"; else this.state.newCompany.open_for="MScIT";
            }
            if(nc.open_for.mtech==true){
                if(this.state.newCompany.open_for=="") this.state.newCompany.open_for+=", MTech"; else this.state.newCompany.open_for="MTech";
            }
            if(nc.open_for.MDes==true){
                if(this.state.newCompany.open_for=="") this.state.newCompany.open_for+=", MDes"; else this.state.newCompany.open_for="MDes";
            }
            console.log(this.state.newCompany.company_offer_type);
            console.log(nc);

            CompanyService.createCompany(nc).then(res=>{
                alert("added");
            });
            
        }else{

        }
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
                            <input type="text" style={{width:"100%"}} value={this.state.newCompany.company_name} onChange={this.handleCompanyName}>
                            </input>
                        </GridItem>
                    </GridContainer>
                    <br></br>
                    <GridContainer>
                        <GridItem  xs={4} sm={4} md={4}>
                            <h5>Contact Person Name</h5>                            
                        </GridItem>
                        <GridItem  xs={8} sm={8} md={8}>
                            <input type="text" style={{width:"100%"}} value={this.state.newCompany.hr_name} onChange={this.handleContactPersonName}>
                            </input>
                        </GridItem>
                    </GridContainer>
                    <br></br>                   
                    <GridContainer>
                        <GridItem  xs={4} sm={4} md={4}>
                            <h5>Company Person Mobile</h5>                            
                        </GridItem>
                        <GridItem  xs={8} sm={8} md={8}>
                            <input type="text" style={{width:"100%"}}  value={this.state.newCompany.hr_contact} onChange={this.handleContactPersonMobile}>
                            </input>
                        </GridItem>
                    </GridContainer>
                    <br></br>
                    <GridContainer>
                        <GridItem  xs={4} sm={4} md={4}>
                            <h5>Open For</h5>                            
                        </GridItem>
                        <GridItem  xs={8} sm={8} md={8}>
                            MScIT<input style={{marginRight:"15px"}} type="checkbox" onChange={this.handleOpenForMScIT} color="primary">
                            </input>
                            BTech<input style={{marginRight:"15px"}} type="checkbox" onChange={this.handleOpenForBTech}>
                            </input>
                            MTech<input style={{marginRight:"15px"}} type="checkbox" onChange={this.handleOpenForMTech}>
                            </input>
                            MDes<input style={{marginRight:"15px"}} type="checkbox" onChange={this.handleOpenForMDes}>
                            </input>

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
                                defaultValue="this.state.newCompany.drive_start_date"
                                InputLabelProps={{
                                shrink: true,
                                }}
                                onChange={this.handleDriveStartDate}
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
                                defaultValue="this.state.newCompany.drive_end_date"
                                InputLabelProps={{
                                shrink: true,
                                }}
                                onChange={this.handleDriveEndDate}
                            />
                        </GridItem>
                    </GridContainer>
                    <br></br>
                    <GridContainer>
                        <GridItem  xs={4} sm={4} md={4}>
                            <h5>Offer Type</h5>                            
                        </GridItem>
                        <GridItem  xs={8} sm={8} md={8}>
                            Internship<input type="checkbox" style={{marginRight:"15px"}} onChange={this.handleOfferTypeInternship}>
                            </input>
                            Job<input type="checkbox" style={{marginRight:"15px"}} onChange={this.handleOfferTypeJob}>
                            </input>
                            Summer Internship<input type="checkbox" style={{marginRight:"15px"}} onChange={this.handleOfferTypeSummerInternship}>
                            </input>
                        </GridItem>
                    </GridContainer>
                    <GridContainer>
                        <GridItem  xs={4} sm={4} md={4}>
                            <h5>Locations</h5>                            
                        </GridItem>
                        <GridItem  xs={8} sm={8} md={8}>
                            <input type="text" style={{width:"100%"}} value={this.state.newCompany.locations} onChange={this.handleLocations}>
                            </input>
                        </GridItem>
                    </GridContainer>
                    <GridContainer>
                        <GridItem  xs={4} sm={4} md={4}>
                            <h5>Category</h5>                            
                        </GridItem>
                        <GridItem  xs={8} sm={8} md={8}>
                            <input type="text" style={{width:"100%"}} value={this.state.newCompany.company_category} onChange={this.handleCategory}>
                            </input>
                        </GridItem>
                    </GridContainer>
                    <br></br><br></br>
                    <GridContainer>
                        <GridItem  xs={4} sm={4} md={4}>
                            <h5>Bond Details</h5>                            
                        </GridItem>
                        <GridItem  xs={8} sm={8} md={8}>
                            <input type="text" style={{width:"100%"}} value={this.state.newCompany.bond_details} onChange={this.handleBondDetails}>
                            </input>
                        </GridItem>
                    </GridContainer>
                    <GridContainer>
                        <GridItem  xs={4} sm={4} md={4}>
                            <h5>Registration Start Date</h5>                            
                        </GridItem>
                        <GridItem  xs={8} sm={8} md={8}>
                            <TextField
                                id="date"
                                type="date"
                                defaultValue="this.state.newCompany.registration_start_date"
                                InputLabelProps={{
                                shrink: true,
                                }}
                                onChange={this.handleDriveStartDate}
                            />
                        </GridItem>
                    </GridContainer>
                    <br></br>
                    <GridContainer>
                        <GridItem  xs={4} sm={4} md={4}>
                            <h5>Registration End Date</h5>                            
                        </GridItem>
                        <GridItem  xs={8} sm={8} md={8}>
                            <TextField
                                id="date"
                                type="date"
                                defaultValue="this.state.newCompany.registration_end_date"
                                InputLabelProps={{
                                shrink: true,
                                }}
                                onChange={this.handleDriveEndDate}
                            />
                        </GridItem>
                    </GridContainer>
                    <br></br>


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