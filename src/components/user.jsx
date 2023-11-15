import React from "react";
//import { useState } from "react";
import "./style.scss";

//const [rememberPasswordCheckbox, changeCheckboxStatus] = useState("rectangle");

const usersignin = () => {
  return (
    <form action="post">
        <div className="user-login">
        <div className="div">
            <div className="group" /> 
            <div className="frame-2">
            <div className="text-wrapper-4">Buy4Me App</div>
            <p className="p">Create an account</p>
            </div>
            <div className="profile-content">
            <label className="text-wrapper-5" htmlFor="input-1">
                Full name
            </label>
            <input className="input" id="input-1" placeholder="Full name" type="name" />
            </div>
            <div className="profile-content">
            <label className="text-wrapper-5" htmlFor="input-1">
                Phone number
            </label>
            <input className="input" id="input-1" placeholder="Phone Number" type="number" />
            </div>
            <div className="profile-content-wrapper">
            <div className="profile-content-2">
                <div className="text-wrapper-5">Password</div>
                <input className="input" id="input-1" placeholder="Password" type="password" />           
            </div>
            <div className="frame-3">
            <span className="span"><input className="span" id="input-1" type="checkbox" /></span>
            <span className="span2 text-wrapper-9 label">I agree to Buy4Me app <a href="http://" target="_blank" rel="noopener noreferrer">Terms & Condition</a>and <a href="http://" target="_blank" rel="noopener noreferrer">Privacy policy</a></span>
            </div>
            </div>
            <div className="inputs" onClick={ () => {
                console.log("Clicked to signup");
            } }>
            <div className="text-wrapper-6">Signup</div>
            </div>
            <div className="frame-4">
            <div className="text-wrapper-9">Forgot Password?</div>
            <p className="recover-here">
                <span className="span"><a href="./#">Recover here</a></span>
            </p>
            </div>
            <div className="frame">
            <div className="text-wrapper-2">Already have an account?</div>
            <div className="div-wrapper">
                <div className="text-wrapper-3"><a href="./#">Login</a></div>
            </div>
            </div>
        </div>
        </div>
    </form>
  );
};


export default usersignin;