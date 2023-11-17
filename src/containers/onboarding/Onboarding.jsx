import React from 'react';
import { OnboardCarousel, WideButton } from '../../components';
import { onboardSlides } from '../../Helpers/OnboardCarouselData';
//import { SmallSize } from "./SmallSize";
import './onboarding.scss';

const Onboarding = () => {
  return (

    <div className="onboarding">
          
      <div className="onboardingWrapper">

        <h1 className="mainTitle">Welcome to Buy4Me</h1>

        <OnboardCarousel data={onboardSlides} />

        <div className="">
          <WideButton text="Login" className="authButton" />
          <WideButton text="Signup" className="authButton" />
        </div>

      </div>

    </div>

  );
  
};
export default Onboarding