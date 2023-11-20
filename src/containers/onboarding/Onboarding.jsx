import React from 'react';
import { OnboardingCarousel } from '../../components';
import { onboardSlides } from '../../Helpers';
import './onboarding.scss';

const Onboarding = () => {

  return (

    <div className="onboarding">

      <OnboardingCarousel data={onboardSlides} />

    </div>

  );
  
};
export default Onboarding