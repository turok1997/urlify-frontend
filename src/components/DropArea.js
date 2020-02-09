import React, { Component } from 'react';
import Dropzone from 'dropzone';
import defaultStyle from 'dropzone/dist/dropzone.css';
import customStyle from '../droparea.css';

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