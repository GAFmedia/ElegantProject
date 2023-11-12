import React, { useState, useEffect } from 'react';

// Import Container and Component Files
import { Header, Footer, Starter } from './containers';
import { Preloader, Onboard, SignIinForm, Feature, Navbar, SignInForm } from './components';

//Import Stykes
import './App.scss';

const App = () => {

  const [loading, setLoading] = useState(true)

        useEffect(()  => {
            setTimeout(() => setLoading(false), 6000 )
          }, [] )

  return (

    <>
            
      { loading && <Preloader /> }

      { <SignInForm /> }

        <div className="App">
        
          
          <h1 className="page-title">
            errandBay
          </h1>

        </div> 

    </>

  );
  
}

export default App
