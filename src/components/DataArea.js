import React, {Component} from "react";
import Api from "../utils/API";
import DataBody from "./DataBody.js";
import Search from "./searchBox";
import "../styles/table.css"

//image, name, phone, email, DOB

class DataArea extends Component {

    state = {
        employees: [{}],
        order: "desc",
        filteredEmployees: [{}]
    }

    handleSort = () => {
        if(this.state.order === "desc") {
            const sortedEmployees = this.state.filteredEmployees.sort(function(a,b) {
                if(a.name.first.toLowerCase() > b.name.first.toLowerCase()) {
                    return -1
                }
                if(a.name.first.toLowerCase() < b.name.first.toLowerCase()) {
                    return 1
                }
                return 0
            });
            this.setState({
                order: "asc",
                filteredEmployees: sortedEmployees  
            });
        }
        if(this.state.order === "asc") {
            const sortedEmployees =  this.state.filteredEmployees.sort(function(a,b) {
                if(a.name.first.toLowerCase() < b.name.first.toLowerCase()) {
                    return -1
                }
                if(a.name.first.toLowerCase() > b.name.first.toLowerCase()) {
                    return 1
                }
                return 0
            });
            this.setState({
                order: "desc",
                filteredEmployees: sortedEmployees   
            });
        }
    }


    //If the index is greater thant -1, the returned objects have the searched letter
    handleInputChange = (event) => {
        const search = event.target.value.toLowerCase();
        //console.log(search);
        const allEmployees = this.state.employees;
        const filteredEmployees = allEmployees.filter(employee => 
            employee.name.first.toLowerCase().indexOf(search) > -1);
        console.log(filteredEmployees);
        this.setState({
            filteredEmployees: filteredEmployees
        })
    }

    componentDidMount() {
        Api.getEmployees().then(response => {
            console.log("RESPONSE",response.data.results);
            this.setState({
                employees: response.data.results,
                filteredEmployees: response.data.results
            })
        });
    }

    render() {
        return(
            <div className="container-fluid">
                <Search 
                    handleInputChange = {this.handleInputChange}
                />
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
                                //employees = {this.state.employees}
                                employees = {this.state.filteredEmployees}
                            />    
                    </table>
            </div>
        )
    }
}

export default DataArea;