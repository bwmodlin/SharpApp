
import './App.css';
import React, { useEffect, useState } from 'react';
import Home from './Home'
import { NextUIProvider } from '@nextui-org/react';

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
    <NextUIProvider>
      <div className={"App-background"}>
        <Home/>
      </div>


    </NextUIProvider>
  );
}

export default App;