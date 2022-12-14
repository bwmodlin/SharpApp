import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Standings from './Standings'
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
        <Standings/>
      </div>


    </NextUIProvider>
  );
}

export default App;