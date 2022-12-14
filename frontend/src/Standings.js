import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Button, Container } from "@nextui-org/react";
import "./Themes.css"

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

function Standings (props) {
  return (
      <div style={{ margin: "10px"}}>
        <Button.Group css={{background : "darkslategray"}} size="xl">
            <Button>Baxter</Button>
            <Button>Casey</Button>
            <Button>Ben</Button>
        </Button.Group>
      </div>
  )
}

export default Standings