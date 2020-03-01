import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom';
import UploaderScreen from './components/UploaderScreen';
import PresentationScreen from './components/PresentationScreen';

class Index extends Component {
  

  render() {
    return(
      <BrowserRouter>
        <Route exact path='/' component={UploaderScreen} />
        <Route path='/presentations/:presentationId' component={PresentationScreen} />
      </BrowserRouter>
    );
  }
};

ReactDOM.render(<Index />, document.getElementById("app"));
