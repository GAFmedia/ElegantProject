import React from "react";
//import { useState } from "react";
import "./signin.scss";

//const [rememberPasswordCheckbox, changeCheckboxStatus] = useState("rectangle");

const Login = () => {
  return (
    <form action="post">
        <div className="user-login">
        <div className="div">
            <div className="group" /> 
            <div className="frame-2">
            <div className="text-wrapper-4">Buy4Me App</div>
            <p className="p">Log in to your account</p>
            </div>
            <div className="profile-content">
            <label className="text-wrapper-5" htmlFor="input-1">
                Email Address
            </label>
            <input className="input" id="input-1" placeholder="Email Address" type="email" />
            </div>
            <div className="profile-content-wrapper">
            <div className="profile-content-2">
                <div className="text-wrapper-5">Password</div>
                <input className="input" id="input-1" placeholder="Password" type="password" />           
            </div>
            </div>
            <div className="inputs" onClick={ () => {
                console.log("Clicked to login");
            } }>
            <div className="text-wrapper-6">Login</div>
            </div>
            <div className="frame-3">
            <span className="span"><input className="span" id="input-1" type="checkbox" /></span>
            <span className="span2 text-wrapper-9 label">Remember Password</span>
            </div>
            <div className="frame-4">
            <div className="text-wrapper-9">Forgot Password?</div>
            <p className="recover-here">
                <span className="span"><a href="./#">Recover here</a></span>
            </p>
            </div>
            <div className="frame">
            <div className="text-wrapper-2">Don’t have an account?</div>
            <div className="div-wrapper">
                <div className="text-wrapper-3"><a href="./#">Sign Up</a></div>
            </div>
            </div>
        </div>
        </div>
    </form>
  );
};


export default Login;