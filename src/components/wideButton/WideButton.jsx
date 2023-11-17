import React from 'react';

const WideButton = ({text, aesthType, onClick}) => {
  return (
    <button className={ aesthType } onClick={ onClick } >
      {text}
    </button>
  )
}

export default WideButton
