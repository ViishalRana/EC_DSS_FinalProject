import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "@material-ui/core/Table/Table";
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Card from "components/Card/Card.js";
// import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import RESTService from "services/RESTService";

export default function TableList() {

  const [companyList,setState]=React.useState({
    data:[]
  });
  const today=new Date("YYYY-MM-DD");

  RESTService.getCompanyData().then((res)=>{
    setState({data:res.data});
  });
  return (  
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Company Name", "Type" ,"Category", "Criteria", "Placement Date","Open for", "Registration Start Date","Registration End Date","Status","Action"]}
              tableData={companyList.data}/>
          
          <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Company Name</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Criteria</TableCell>
                            <TableCell>Drive Start Date</TableCell>
                            <TableCell>Open For</TableCell>
                            <TableCell>Registration Start Date</TableCell>
                            <TableCell>Registration End Date</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            companyList.data.map((company)=>{
                                return(
                                    <TableRow key={company.company_id}>
                                    <TableCell>{company.company_name}</TableCell>
                                    <TableCell>{company.company_category}</TableCell>
                                    <TableCell>7.0</TableCell>
                                    <TableCell>{company.drive_start_date}</TableCell>
                                    <TableCell>MScIT,BTech</TableCell>
                                    <TableCell>{company.registration_start_date}</TableCell>
                                    <TableCell>{company.registration_end_date}</TableCell>
                                    {/* <TableCell>
                                      {
                                        new Date(company.registration_start_date)<=today && today<=new Date(company.registration_end_date) && <span>Open</span>
                                      }
                                    </TableCell> */}
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
