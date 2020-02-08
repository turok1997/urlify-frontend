import React, { Component } from 'react';
import Dropzone from 'dropzone';
import dropzoneStyle from 'dropzone/dist/dropzone.css';

const areaId = 'dropArea';

Dropzone.options[areaId] = {
  paramName: "file", // The name that will be used to transfer the file
  maxFilesize: 2, // MB
  accept: function(file, done) {
    if (file.name == "justinbieber.jpg") {
      done("Naha, you don't.");
    }
    else { done(); }
  },
  url: "/dropalwik"
};

const DropArea = () => {
  return(
    <div className="dropzone" id={areaId}></div>
  );
};

export default DropArea;