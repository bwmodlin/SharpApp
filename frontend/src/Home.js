import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Button, Container } from "@nextui-org/react";
import './Home.css';

/**
  useEffect(()=>{
    axios.get('http://127.0.0.1:5000/flask/hello').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, [])
   */

function Home (props) {
    return (
        <div style={{ margin: "10px"}} className="hbuttons">
            <Button flat color="primary" auto>
                Primary
            </Button>
            <Button size="xl" color="primary" flat bordered auto>
                Primary
            </Button>
            <Button size="xl" color="primary" flat bordered auto>
                Test
            </Button>
        </div>
    )
}

export default Home