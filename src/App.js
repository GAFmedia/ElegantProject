import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';

import { routes } from './Routes';
// Import Container and Component Files
import { Header, Onboarding, Footer, Starter } from './containers';
import { Preloader, SignInForm, Feature, Navbar, Login } from './components';



//Import Stykes
import './App.scss';

const App = () => {

  const [loading, setLoading] = useState(true)

        useEffect(()  => {
            setTimeout(() => setLoading(false), 3000 )
          }, [] )

  return (

    < div className='App'>

      <Navbar />
      <routes />
            
      { loading && <Preloader /> }

      { <Onboarding /> }     

    </div>

  );
  
}

export default App
