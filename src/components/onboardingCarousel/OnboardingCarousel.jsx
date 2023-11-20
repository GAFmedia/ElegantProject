import React, {useState} from "react";
import { AppButton } from '..';
import './onboardingCarousel.scss';

const OnboardingCarousel = ({data}) => {

    const [onboardSlides, setCurrImg] = useState(0);

    const nextSlide = () => { setCurrImg(onboardSlides === data.length - 1 ? 0 : onboardSlides + 1) };
    const prevSlide = () => { setCurrImg(onboardSlides === 0 ? data.length - 1 : onboardSlides - 1) };

  return (
          
    <div className="onboardingWrapper">

        <div className="onBoardingContainer px-4" >

            <div className="skipButtonWrap mx-t-5">
            
                { <AppButton text={"Skip"} onClick={nextSlide} aesthClass={"midiButton secondary"} /> }   
        
            </div>      

            <div className="onboardingCarousel mx-5">

                <div className="onboardingCarouselInner">

                    {data.map((item, idx) => { 

                        return(
                            
                        <div className={ onboardSlides === idx ? "onboardingCarouselItem" : "onboardingCarouselItem carouselItem-hidden" } key={idx} >                      
                            <div className="onboardingCarouselSlide" >
                                <img src={item.img} alt={item.alt} key={idx} className="carouselImg"/>                
                            </div>
                            <div className="onboardingCarouselCaption mx-4">
                                <h2 className="captionTitle" key={idx} >{ item.title }</h2>
                                <p className="captionSubTitle" key={idx} >{ item.subTitle }</p>                                            
                            </div>
                        </div>)

                    })} 

                </div>
            
            </div>

            <div className="carouselIndicatorWrap mx-b-5">

                <div className="carouselIndicators">
                    {data.map((_, idx) => {
                        return <button key={idx} onClick={() => setCurrImg(idx)} className={onboardSlides === idx ? "carouselIndicator" : "carouselIndicator carouselIndicator-inactive"} />
                    })}  
                </div> 

                { <AppButton text={onboardSlides > data.length - 2 ? "Get Started" : "Next"} onClick={onboardSlides > data.length - 2 ? prevSlide : nextSlide} aesthClass={"midiButton primary"} /> }   

            </div>

        </div>
        
    </div>

  )
};

export default OnboardingCarousel;

