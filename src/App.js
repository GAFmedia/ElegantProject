import React, { useState, useEffect } from 'react';
// Import Container and Component Files
import { Header, Onboarding, Footer, Starter } from './containers';
import { Preloader, SignInForm, Feature, Navbar } from './components';

//Import Stykes
import './App.scss';

const App = () => {

  const [loading, setLoading] = useState(true)

        useEffect(()  => {
            setTimeout(() => setLoading(false), 5000 )
          }, [] )

  return (

    <>
            
      { loading && <Preloader /> }

      { <Onboarding /> }

      let content;

      if (isLoggedIn){

        <div className="App">
                  
          <h1 className="page-title">
            errandBay
          </h1>

           content = <SignInForm />;
           
        </div> 

      }
      else{

      }

      return(
        <>
          content;
        </>
      )

    </>

  );
  
}

export default App
