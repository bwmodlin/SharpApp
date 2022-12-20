import React, {useEffect, useState} from "react";
import {FormControl, Select, MenuItem, InputLabel} from '@mui/material';
import axios from 'axios';

function Param() {

  const [getMessage, setGetMessage] = useState("loading")
  useEffect(()=>{
    axios.post('http://127.0.0.1:5000/flask/test', ).then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response.data.message)
    }).catch(error => {
      console.log(error)
    })

  }, [])

  return (
      <div>
        {getMessage}
      </div>
  );
}

export default Param;