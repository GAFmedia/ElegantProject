import React from 'react'
import './appbutton.scss';
import AppButton from './AppButton';

const OnButton = ({ value, showRegModal, openRegModal }) => {
  
  return  (
    
    <div className="onboardingButtons" >
          
        {value.map((item, idx) => {
         
         console.log(value)
         
        return(
          <AppButton type="Button" text={ item.authScreen } showRegModal={showRegModal} aesthClass={idx === 0 ? "wideButton mx-b-2 secondary" : "wideButton primary" } key={idx} onClick={ openRegModal }  />      
        )
      }
      )} 
                        
  </div>

  )    
        
}

export default OnButton
