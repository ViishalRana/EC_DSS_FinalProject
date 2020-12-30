import axios from 'axios';

const STUDENT_API_BASE_URL = "http://localhost:8080/api/v1/Student";

class StudentService{

    getAllStudents(){
        return axios.get(STUDENT_API_BASE_URL+"/students");

    }
    getAllStudentsBySI(){
        return axios.get(STUDENT_API_BASE_URL+"/students/si");
    }
}

export default new StudentService()