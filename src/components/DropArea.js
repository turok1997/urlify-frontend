import React, { Component } from 'react';
import Dropzone from 'dropzone';
import defaultStyle from 'dropzone/dist/dropzone.css';
import customStyle from '../droparea.css';

const areaId = 'dropArea';

Dropzone.autoDiscover = false;

class DropArea extends Component {

  constructor(props) {
    super(props)
    this.configureDropzone({
      onSuccess: props.onSuccess.bind(this),
    })
  }

  configureDropzone(callbacks) {
    Dropzone.options[areaId] = {
      paramName: "file", // The name that will be used to transfer the file
      maxFilesize: 5, // MB
      init: function() {
        this.on('success', function(response) { callbacks.onSuccess({code: 200, presentationId: 117}) });
      },
      url: "/presentations",
    };
  }

  componentDidMount() {
    this.setState({
      dropzone: new Dropzone(`div#${areaId}`, Dropzone.options[areaId]),
    });
  }

  render() {
    return(
      <div className="dropzone" id={areaId}></div>
    );
  }
};

export default DropArea;
