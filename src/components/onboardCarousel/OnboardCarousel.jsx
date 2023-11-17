import React, {useState} from "react";
import './onboardCarousel.scss';
//import { onboardSlides } from '../../Helpers/OnboardCarouselData';

const OnboardCarousel = ({data}) => {

    const [onboardSlides, setCurrImg] = useState(0);

  return (
          
    <div className="onboardCarousel">

        <div className="onboardCarouselInner">

            {data.map((item, idx) => {      
                return(
                <div className={onboardSlides === idx ? "onboardCarouselItem" : "onboardCarouselItem carouselItem-hidden"} >                      
                    <div className="onboardCarouselSlide" >
                        <img src={item.img} alt={item.alt} key={idx} className="carouselImg"/>                
                    </div>
                    <div className="onboardCarouselCaption">
                        <h2 className="captionTitle" key={idx} >{ item.title }</h2>
                        <p className="captionSubTitle" key={idx} >{ item.subTitle }</p>                                            
                    </div>
                </div>)
            })} 

        </div>

        <div className="carouselIndicators">
            {data.map((_, idx) => {
                return <button key={idx} onClick={() => setCurrImg(idx)} className={onboardSlides === idx ? "carouselIndicator" : "carouselIndicator carouselIndicator-inactive"} />
            })}  
        </div>        

    </div>
  )
};

export default OnboardCarousel;

