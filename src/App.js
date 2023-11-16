import React, { useState, useEffect } from 'react';
// Import Container and Component Files
import { Header, Footer, Starter } from './containers';
import { Feature, Navbar, Onboard, Preloader } from './components';
import { SignInForm, VendorOnboard } from './pages';
import Routes from './Routes';

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
            <Routes />
        </div> 

    </>

  );
  
}

export default App
