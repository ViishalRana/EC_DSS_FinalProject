import axios from 'axios';

const SPCMEMBER_API_BASE_URL = "http://localhost:8080/api/v1/company";

class CompanyService{
    createCompany(company){
        return axios.post(SPCMEMBER_API_BASE_URL+"/addCompany",company);
    }
    getAllCompanies(){
        return axios.get(SPCMEMBER_API_BASE_URL+"/companylist");
    }
}


export default new CompanyService()