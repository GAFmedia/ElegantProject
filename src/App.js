import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Import Container and Component Files
import { Header, Onboarding, Footer, Starter } from './containers';
import { Preloader, SignInForm, Feature, Navbar } from './components';


//Import Stykes
import './App.scss';

const App = () => {

  const [loading, setLoading] = useState(true)

        useEffect(()  => {
            setTimeout(() => setLoading(false), 3000 )
          }, [] )

  return (

    <>
            
      { loading && <Preloader /> }

      { <Onboarding /> }     

    </>

  );
  
}

export default App
