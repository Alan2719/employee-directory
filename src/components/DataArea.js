import React, {Component} from "react";
import Api from "../utils/API";
import DataBody from "./DataBody.js";
import Search from "./searchBox";

//image, name, phone, email, DOB

class DataArea extends Component {

    state = {
        employees: [{}],
        order: "desc"
    }

    handleSort = (order) => {
        if(this.state.order === "desc") {
            const sortedEmployees = this.state.employees.sort(function(a,b) {
                if(a.name.first.toLowerCase() > b.name.first.toLowerCase()) {
                    return -1
                }
                if(a.name.first.toLowerCase() < b.name.first.toLowerCase()) {
                    return 1
                }
                return 0
            })
            this.setState({
                order: "asc",
                employees: sortedEmployees  
            })
        }
        if(this.state.order === "asc") {
            const sortedEmployees =  this.state.employees.sort(function(a,b) {
                if(a.name.first.toLowerCase() < b.name.first.toLowerCase()) {
                    return -1
                }
                if(a.name.first.toLowerCase() > b.name.first.toLowerCase()) {
                    return 1
                }
                return 0
            })
            this.setState({
                order: "desc",
                employees: sortedEmployees   
            })
        }
    }



    componentDidMount() {
        Api.getEmployees().then(response => {
            console.log("RESPONSE",response.data.results);
            this.setState({
                employees: response.data.results
            })
        });
    }

    render() {
        return(
            <table className="table">
        <thead>
            <tr>
                <th>Image</th>
                <th>Name<button onClick={this.handleSort}><i className="fas fa-arrows-alt-v"></i></button></th>
                <th>Phone</th>
                <th>Email</th>
                <th>DOB</th>
            </tr>
        </thead>
        <DataBody 
                employees = {this.state.employees}
            />    
        </table>
            
        )
    }
}

export default DataArea;