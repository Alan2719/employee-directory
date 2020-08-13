import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Wrapper from "./components/wrapper.js";
import Header from "./components/header.js";
import Employee from "./components/DataArea.js";

function App() {
    return (
      <Router>
        <div>
          <Header />
          <Wrapper>
            <Employee />
          </Wrapper>
        </div>
      </Router>
    );
}

export default App;
