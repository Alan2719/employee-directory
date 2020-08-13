import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=200";

export default {
    getEmployees: function() {
        return axios.get(BASEURL);  
    }
}