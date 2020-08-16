import React from "react";
import "../styles/searchBar.css"

function SearchBox (props) {
    return <input
        onChange={props.handleInputChange} 
        type="text"
        name="search"
        className="form-control"
        placeholder="search"
    />

}

export default SearchBox;