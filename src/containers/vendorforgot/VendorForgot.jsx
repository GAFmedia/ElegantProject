import React from 'react'
import './forgot.scss';
import back from '../../assets/back.png';

const VendorForgot = () => {
  return (
    <>
      <div className="vendor-forgot-password">
        <div className="div">
          <div className="frame">
            <div className="profile-content">
              <label className="label" htmlFor="input-2">
                Email/Phone Number
              </label>
              <input className="input" id="input-2" placeholder="Input Email address or phone number" type="email" />
            </div>
          </div>
          <img className="ic-baseline-keyboard" src={ back } />

          <div className="text-wrapper-2">Forgot Password</div>

          <p className="p">Enter your email or phone number to get OTP</p>
          <div className="inputs cursor-type">
            <div className="text-wrapper-3">Get OTP</div>
          </div>

        </div>
      </div>
    </>
  )
}

export default VendorForgot