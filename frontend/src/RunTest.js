import React, {useEffect, useState} from "react";
import {Stack, Button, Box, Paper} from '@mui/material';
import axios from 'axios';

function Param() {

  const [getMessage, setGetMessage] = useState("loading")
  useEffect(()=>{
    axios.post('http://127.0.0.1:5000/rtools/run', {message: "hi"}, {
  headers: {
    'Content-Type': 'application/json'
  }}).then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response.data.message)
    }).catch(error => {
      console.log(error)
    })

  }, [])

  return (
      <Paper sx={{width:'100%'}}>
        <Stack spacing={4}>
          <Button
            sx={{color:"white", backgroundColor:"#4b6896", width: "15vw", textAlign: "center", m: 4}}
            component="label"
          >
            {"Input file"}
            <input
              type="file"
              webkitdirectory=""
              directory=""
              hidden
            />
          </Button>
          <Paper elevation={3} sx={{color: "white", width: "100%" }}> 
            <Button
              sx={{color:"white", backgroundColor:"#4b6896", width: "15vw", textAlign: "center", m: 4}}
              component="label"
              variant="contained"
              elevation={3}
            >
              {"Run"}
              <input
                type="file"
                webkitdirectory=""
                directory=""
                hidden
              />
            </Button>
          </Paper> 
        </Stack>
      </Paper>
  );
}

export default Param;