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

  return (

    showModal ? (

      <div className='modalBackground' ref={modalRef} onClick={closeModal}>
            
        {data.map((item, idx) => {
                
          console.log(data)

          return(
                      
            <div className="modalContainer ">
                
              <div className={ item.id === 0 ? "modalWrapper modalItemActive " : "modalWrapper " } key={item.id === 0} >

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
                    <AppButton text={ item.authInfoBtn } aesthClass="smallButton secondary" onClick={"openModal"} />
                  </div>

                </div>              

              </div>

            </div>

          )}) 
                  
        }
              
      </div> 

    ) : null   

  );

}

export default AuthenticateModal