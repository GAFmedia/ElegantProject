import React,  { useRef, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { AppButton } from '..';
import './authenticatemodal.scss'

const AuthenticateModal = ({ showModal, setShowModal, data }) => {
    
  const modalRef = useRef();

  const closeModal = e =>{
    if(modalRef.current === e.target){
      setShowModal(false);
    }
  };

  const [authScreens, setCurrScreen] = useState(0);
//  const nextScreen = () => { setCurrScreen(authScreens === data.length - 1 ? 0 : authScreens + 1); };

//  const prevScreen = () => { setCurrScreen(authScreens === 0 ? data.length - 1 : authScreens - 1); };

//  const pryScreen = () => { setCurrScreen(authScreens === 0 ); };

//  const secScreen = () => { setCurrScreen(authScreens === 1 ); };

//  const nextScreen = () => { setCurrScreen(authScreens === data.length - 1 ? 0 : authScreens + 1); };

  return (

    showModal ?  (

      <div className='modalBackground' ref={modalRef} onClick={closeModal}>

        <div className="modalContainer ">
            
          {
            data.map((item, idx) => { console.log(data)

            return(
                                      
                <div className={ authScreens === idx ? "modalWrapper" : "modalWrapper modalItemHidden" } key={idx} >

                  {/* Autthentication Select Screen Close Button */}
                  <div className="closeButtonWrap mx-b-4">
                    <MdClose className="closeModalButton" aria-label='Close Modal' onClick={() => setShowModal(prev => !prev)} />
                    <span className='closeText'>Close</span>
                  </div>
            
                  <div className={ "authOptionWrap" } key={idx} >
                    
                    {/* Autthentication Select Header */}
                    <h1 className="authTitle" key={idx} >{ item.authHeader }</h1>

                    {/* Autthentication Select Options */}
                    <div className="authButtonsWrap mx-5" key={idx} >
                      <AppButton type={"Button"} text={"Vendor"} aesthClass="midiButton primary my-r-4" onClick={""} />
                      <AppButton type={"Button"} text={"Buyer"} aesthClass="midiButton secondary" onClick={""} />
                    </div>

                    {/* Autthentication Select Lower Section Info */}
                    <div className="authInfoWrap mx-t-3" key={idx} >
                      <p className="authInfoText my-r-2">{ item.authInfo }</p>
                      <AppButton text={ item.authInfoBtn } aesthClass="smallButton secondary" onClick={() => setCurrScreen(idx)} />
                    </div>

                  </div>              

                </div>

            )}) 
            
          }

        </div>
            
      </div> 

    ) : null   

  );

}

export default AuthenticateModal
