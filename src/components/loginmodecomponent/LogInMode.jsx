import React from 'react'
import { Link } from 'react-router-dom';
import './loginmode.scss';

const LogInMode = () => {
  return (
    <>
        <div className="login">
            <div className="overlap-group-wrapper">
                <div className="overlap-group">
                    <div className="div">Login as</div>
                        <Link to={'/vendorsiginpage'}>
                            <button className="frame-vendor cursor-type" type="submit">
                                Vendor
                            </button>
                        </Link>

                        {/* COMMENT IN HERE */}             
                        
                        <Link to={'/usersigninpage'}>
                            <button className="frame-individual cursor-type" type="submit">
                                Individual
                            </button>
                        </Link>
                        
                        {/* COMMENT IN HERE */}

                    <div className="frame-2">
                        <div className="text-wrapper-2">Don’t have an account?</div>
                        <div className="div-wrapper">
                        <Link to={"/signupmodepage"} className='cursor-type'>
                            <div className="text-wrapper-3">Sign Up</div>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default LogInMode;