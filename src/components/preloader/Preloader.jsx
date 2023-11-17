import React from 'react';

import './preloader.scss';
import logo from '../../assets/logo.svg';

const Preloader = () => {

  return (
    <div className='preloader'>
      <div className="load-container">
        <div className="loader">
          <div className="app-logo">
            <img src={ logo } alt='logo' />
          </div> 
          <div className="name-logo"><h1>Buy4Me</h1></div>                   
        </div>
        <div className="spining-loader"></div>
      </div>
    </div>
  )
}

export default Preloader