import React from "react";
import ReactDOM from "react-dom";
import DropArea from './components/DropArea';
import style from "./style.css"

const Index = () => {
  return(
    <div className="container">
      <DropArea/>
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("app"));