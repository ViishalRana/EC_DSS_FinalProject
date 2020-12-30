import axios from 'axios';

const STUDENT_API_BASE_URL = "http://localhost:8080/api/v1";

class StudentService{
    getStudentDataByID(){
        return axios.get(STUDENT_API_BASE_URL+"/Student/students/getProfileData",{
            params:{
                "stud_id":"201912017"
            }
        });        
    }
    getCompanyData(){
        return axios.get(STUDENT_API_BASE_URL+"/company/companylist");
    }
}

export default new StudentService()