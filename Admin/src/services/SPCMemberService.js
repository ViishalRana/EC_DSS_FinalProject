import axios from 'axios';

const SPCMEMBER_API_BASE_URL = "http://localhost:8080/api/v1/spc";

class SPCMemberService{
    createSPCMember(spcm){
        return axios.post(SPCMEMBER_API_BASE_URL+"/addMember",spcm);
    }
    getAllMembers(){
        return axios.get(SPCMEMBER_API_BASE_URL+"/memberlist");
    }
}


export default new SPCMemberService()