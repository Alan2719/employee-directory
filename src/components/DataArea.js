import React, {Component} from "react";
import Api from "../utils/API";

//image, name, phone, email, DOB

class Employee extends Component {

    componentDidMount() {
        Api.getEmployees().then(response => {
            console.log("RESPONSE",response.data.results[0]);
        });
    }

    render() {
        return(
            <h4>All Employees</h4>
        )
    }
}

export default Employee;