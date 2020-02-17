import React from 'react';
import style from '../go_button.css';

const GoButton = () => {
  return(
    <div id="container">
      <button class="learn-more">
        <span class="circle" aria-hidden="true">
          <span class="icon arrow"></span>
        </span>
      </button>
    </div>
  );
}

export default GoButton;
