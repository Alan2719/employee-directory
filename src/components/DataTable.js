import React from "react";
import DataArea from "./DataArea.js"
import "../styles/table.css"

function DataTable() {
    return <table className="table">
        <thead>
            <tr>
                <th>Image</th>
                <th>Name<button><i className="fas fa-arrows-alt-v"></i></button></th>
                <th>Phone</th>
                <th>Email</th>
                <th>DOB</th>
            </tr>
        </thead>
            <DataArea
                 
            />    
    </table>
}

export default DataTable;