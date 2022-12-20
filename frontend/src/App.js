
import './App.css';
import React, { useEffect, useState } from 'react';
import Steps from './Steps'
import Footer from './Footer'

function App() {

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    const [tab, setTab] = React.useState(0);

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
        <Steps
            tab = {tab}
            setTab = {setTab}
        />
        <Footer
            tab = {tab}
            setTab = {setTab}
        />
      </div>



  );
}

export default App;