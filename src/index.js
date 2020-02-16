import React, { Component } from "react";
import ReactDOM from "react-dom";
import DropArea from './components/DropArea';
import style from "./style.css"

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onPresentationUploaded: this.handleUploadedPresentation.bind(this)
    };
  }

  handleUploadedPresentation(response) {
    const changeStateToShowPresentation = (presentation) => {
      this.setState({
        showPresentation: true,
        presentationId: presentation.id,
      });
    };

    if (response.code != 200) {
      return;
    }

    changeStateToShowPresentation({ id: response.presentationId });
  }

  render() {
    function replacedComponent(state) {
      if (state.showPresentation) {
        return <Presentation presentationId={state.presentationId} />;
      }

      if (state.isProcessing) {
        return <Loading />
      }

      return <DropArea onSuccess={state.onPresentationUploaded} />;
    }

    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col text-center">
            <h1 className="header">URLIFY</h1>
          </div>
        </div>
        <div className="row margin-bottom">
          <div className="col text-center">
            <h3 className="header">Extract and share links from your presentation</h3>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            { replacedComponent(this.state) }
          </div>
        </div>
      </div>
    );
  }
};

ReactDOM.render(<Index />, document.getElementById("app"));
