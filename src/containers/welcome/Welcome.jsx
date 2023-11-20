import React, { useState } from 'react';
import { OnboardingCarousel, AppButton, AuthenticateModal, OnButton } from '../../components';
import { onboardSlides, authScreens } from '../../Helpers';
import './welcome.scss';

const Welcome = () => {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
        setShowModal(prev => !prev);
  }

  return (

    <div className="onboarding">
          
      <div className="onboardingWrapper">

        <h1 className="mainTitle">Welcome to Buy4Me</h1>

        <OnboardingCarousel data={onboardSlides} />

        <div className="onboardingButtons" >
          
          <OnButton data={authScreens} showModal = {showModal} openModal={openModal} type="Button" aesthClass="wideButton mx-b-2 secondary"  />
                        
        </div>

      </div>

        {<AuthenticateModal data={authScreens} showModal={showModal} setShowModal={setShowModal} /> }

    </div>

  );
  
};
export default Welcome