import React, { Component } from 'react';
import GoButton from './GoButton';

const Presentation = (props) => {
  return(
    <div className='presentation-block'>
      <h3>Code to access links: {props.presentationId}</h3>
      <GoButton />
    </div>
  );
}

export default Presentation;
