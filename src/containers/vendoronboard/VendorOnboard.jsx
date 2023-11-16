import React from 'react'
import "./vendoronboard.scss";
import { Link } from 'react-router-dom';
//import { Rectangle } from "./Rectangle";

const VendorOnboard = () => {
  return (
    <form action="post">
        <div className="vendor-sign-up">
            <div className="div-2">
                
                <div className="group" />
                    <div className="frame-2">
                        <div className="text-wrapper-4">Buy4Me App</div>
                        <div className="text-wrapper-5">Create an account</div>
                    </div>

                <div className="profile-content-2">
                    <label className="text-wrapper-6" htmlFor="input-1">
                        Full Name
                    </label>
                    <input className="input-2" id="input-1" placeholder="Full Name" type="text" />
                </div>    

                <div className="profile-content">
                    <div className="text-wrapper-6">Location</div>
                    <input className="input-2" id="input-1" placeholder="Location" type="text" />
                </div>

                <div className="profile-content-4">
                    <label className="text-wrapper-6" htmlFor="input-2">
                        Phone number
                    </label>
                    <input className="input-2" id="input-2" placeholder="Phone Number" type="tel" />
                </div>

                <div className="profile-content-3">
                    <div className="text-wrapper-6">Password</div>
                    <input className="input" id="input-1" placeholder="Password" type="password" />
                </div>
                
                <div className="frame-3">
                {/* SEE JSX CHECKBOX BELOW */}
                <p className="i-agree-to">
                    <span className="span"><input className="span" id="input-1" type="checkbox" /></span>
                    <span className="span">  I agree to Buy4Me app </span>
                    <span className="text-wrapper-10">Terms &amp; Conditions</span>
                    <span className="span"> and </span>
                    <span className="text-wrapper-10">Privacy Policy</span>
                    <span className="span">. </span>
                </p>
                </div>

                <div className="inputs cursor-type" onClick={ () => {
                    console.log("Clicked to login");
                    } }>
                    <div className="text-wrapper-9">Sign Up</div>
                </div>

                <div className="frame">
                    <div className="text-wrapper-2">Already have an account?</div>
                        <div className="div-wrapper">
                            <Link to={'/vendorsignin'} className='cursor-type'>
                                <div className="text-wrapper-3">Log in</div>
                            </Link>
                        </div>
                </div>
            </div>
        </div>
    </form>
  );
};

export default VendorOnboard;