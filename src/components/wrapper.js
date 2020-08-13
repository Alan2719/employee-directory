import React from "react";
import "../styles/wrap.css";

function Wrapper(props) {
return <div className="wrapper">{props.children}</div>
}

export default Wrapper;