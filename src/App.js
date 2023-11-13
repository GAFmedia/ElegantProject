import React, { useState, useEffect } from 'react';

// Import Container and Component Files
import { Header, Footer, Starter } from './containers';
import { Preloader, Feature, Navbar, SignInForm, VendorOnboard } from './components';

//Import Styles
import './App.scss';


const App = () => {

  const [loading, setLoading] = useState(true)

        useEffect(()  => {
            setTimeout(() => setLoading(false), 6000 )
          }, [] )

  return (

    <>
            
      { loading && <Preloader /> }

        <div className="App">
          <SignInForm />
        </div> 

    </>

  );
  
}

export default App
