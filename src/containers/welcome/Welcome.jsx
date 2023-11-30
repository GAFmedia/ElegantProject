import React, { useState } from 'react';
import { LoginModal, RegistModal, AppButton } from '../../components';
import { authScreens } from '../../Helpers';
import SlideFour from '../../assets/slideFour.webp';
import './welcome.scss';

const Welcome = () => {

  const heroImage =  {
    title: "Connecting you to Convenience", 
    img: SlideFour, 
    alt: "Slide-Four Image"
}

  const [showLogModal, setShowLogModal] = useState(false);

  const openLogModal = () => {
        setShowLogModal(prev => !prev);
  }

  const [showRegModal, setShowRegModal] = useState(false);

  const openRegModal = () => {
        setShowRegModal(prev => !prev);
  }

  return (

    <div className="onboarding">
          
      <div className="onboardingWrapper">

        <h1 className="mainTitle">Welcome to Buy4Me</h1>

            <div className="onboardingCarousel mx-5">

                <div className="onboardingCarouselInner">
                          
                  <div className={ "onboardingCarouselItem" } >                      
                      
                      <div className="onboardingCarouselSlide" >

                        <img src={heroImage.img} alt={heroImage.alt} className="carouselImg"/>                

                      </div>
                      
                      <div className="onboardingCarouselCaption mx-4">
                          <h2 className="captionTitle" >{ heroImage.title }</h2>
                      </div>
                      
                  </div>

                </div>
            
            </div>

        {<LoginModal data={authScreens} showLogModal={showLogModal} setShowLogModal={setShowLogModal} /> }
        
        {<RegistModal data={authScreens} showRegModal={showRegModal} setShowRegModal={setShowRegModal} /> }
    
        <div className="onboardingButtons" >
        
        {<AppButton text={authScreens.authScreen = "Login"} value={authScreens} key={authScreens.id=0} showLogModal = {showLogModal} openLogModal={openLogModal} type="Button" onClick={ openLogModal } aesthClass={ " wideButton mx-b-2 secondary " }/>}

        {<AppButton text={authScreens.authScreen = "Register"}  value={authScreens} key={authScreens.id=1}  showRegModal = {showRegModal} openRegModal={openRegModal} type="Button" onClick={ openRegModal } aesthClass={ " wideButton primary " }/>}
                        
        </div>

      </div>

    </div>

  );
  
};
export default Welcome