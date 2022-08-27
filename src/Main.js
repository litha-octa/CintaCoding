import React, { Component } from "react";
import { Route,Routes, HashRouter } from "react-router-dom";

import Login from "./Screen/Login";
import Welcome from './Screen/Welcome';
import Dashboard from './Screen/Dashboard';



class Main extends Component {
  componentDidUpdate(){
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <HashRouter onUpdate={() => window.scrollTo(0,0)}>
        <div>
          <div className="content">
            <Routes>
            <Route exact path="/" element={<Welcome/>} />
              <Route path="/Login" element={<Login/>} />
              <Route path="/Dashboard" element={<Dashboard/>} />
            </Routes>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;