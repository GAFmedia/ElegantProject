import React from 'react'
import { Link } from 'react-router-dom';
import './signupmode.scss';

const SignUpMode = () => {
  return (
   <>
        <div className="sign-up">
            <div className="overlap-group-wrapper">
                <div className="overlap-group">
                    <div className="div">Sign up as</div>
                        <Link to={"/vendoronboardingpage"}>
                            <button className="frame-vendor cursor-type" type="submit">
                                Vendor
                            </button>
                        </Link>

                        {/* COMMENT IN HERE */}             
                        
                        <Link to={"/useronboardingpage"}>
                            <button className="frame-individual cursor-type" type="submit">
                                Individual
                            </button>
                        </Link>
                        
                        {/* COMMENT IN HERE */}

                    <div className="frame-2">
                        <div className="text-wrapper-2">Already have an account?</div>
                        <div className="div-wrapper">
                        <Link to={"/loginmodepage"} className='cursor-type'>
                            <div className="text-wrapper-3">Log in</div>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default SignUpMode