
import './App.css';
import React, { useEffect, useState } from 'react';
import Home from './Home'
import Steps from './Steps'
import Footer from './Footer'

function App() {

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    function getWindowDimensions() {
      const { innerWidth: width, innerHeight: height } = window;
      return {
        width,
        height
      };
    }

    useEffect(() => {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);

        }, []);

  return (

      <div className={"App-background"}>
        <Steps/>
        <Footer/>
      </div>



  );
}

export default App;