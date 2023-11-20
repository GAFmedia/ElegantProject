import React from 'react';
import './appbutton.scss';

const AppButton = ({text, type, aesthClass, onClick}) => {
  return (
      <button type={type} className={ aesthClass } onClick={ onClick } >
      {text}
    </button>
  )
}

export default AppButton
