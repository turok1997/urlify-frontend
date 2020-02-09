import React from "react";
import ReactDOM from "react-dom";
import DropArea from './components/DropArea';
import style from "./style.css"

const Index = () => {
  return(
    <div class="container-fluid">
      <div class="row">
        <div className="col text-center">
          <h1 className="header">URLIFY</h1>
        </div>
      </div>
      <div class="row margin-bottom">
        <div className="col text-center">
          <h3 className="header">Extract and share links from your presentation</h3>
        </div>
      </div>
      <div class="row">
        <div className="col text-center">
          <DropArea/>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("app"));