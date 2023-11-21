import React,  { useRef, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { AppButton, LoginModal } from '..';
import { Welcome } from '../../containers';
import './authenticatemodal.scss'

const RegistModal = ({ authScreens, showRegModal, setShowRegModal, setShowLogModal, showLogModal, data }) => {
    
  const modalRef = useRef();

  const closeModal = e =>{
    if(modalRef.current === e.target){
      setShowRegModal(false);
    }
  };

  const [loginScreen, setLogScreen] = useState(false);
        
  if(loginScreen){ return <Welcome />; };    

  return (

    showRegModal ? (

      <div className='modalBackground' ref={modalRef} onClick={closeModal}>
            
        {data.map((item, idx) => {
                
          console.log(data)

          return(
                      
            <div className="modalContainer ">
                
              <div className={ item.id === 0 ? "modalWrapper  " : "modalWrapper modalItemActive" } key={item.id === 0} >

                {/* Autthentication Select Screen Close Button */}
                <div className="closeButtonWrap mx-b-4">
                  <MdClose className="closeModalButton" aria-label='Close Modal' onClick={() => setShowRegModal(prev => !prev)} />
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
                    <AppButton text={ item.authInfoBtn } aesthClass="smallButton secondary" ref={modalRef} onClick={ () => setLogScreen(true) } />
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

export default RegistModal