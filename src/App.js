import React, { useState, useEffect } from 'react';

// Import Container and Component Files
import { Header, Footer, Starter } from './containers';
import { Preloader, Signin, Feature, Navbar } from './components';

//Import Stykes
import './App.scss';
import SignInForm from './components/SignIn/SignIn';

const App = () => {

  const [loading, setLoading] = useState(true)

        useEffect(()  => {
            setTimeout(() => setLoading(false), 6000 )
          }, [] )

  return (

    <>
            
      { loading && <Preloader /> }

      { <Signin /> }

        <div className="App">
        
          
          <h1 className="page-title">
            errandBay
          </h1>

        </div> 

    </>

  );
  
}

export default App
