import React, {useEffect, useState} from "react";
import {Stack, Button, Box, Paper} from '@mui/material';
import axios from 'axios';  

function Param(props) {
  const {dataFile, markerFile, configFile, refFile, labelFile, neighbors, selected, outputPath, setOutputPath} = props
  
  const [getMessage, setGetMessage] = useState("loading")

  const handleChange = (event) => {
    const item = event.target.files.item(0)
    const path = item.path.split('/')
    const newPath = path.slice(0, path.length-1)
    setOutputPath([path[path.length - 2], newPath.join("/")])


  }

  const onRun = () => {
    axios.post('http://127.0.0.1:5000/rtools/run', {dataFile: dataFile[1], markerFile: markerFile[1], configFile: configFile[1], refFile: refFile[1], labelFile: labelFile[1], neighbors: neighbors, selected: selected.toString(), outputPath: outputPath[1]}, {
  headers: {
    'Content-Type': 'application/json'
  }}).then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response.data.message)
    }).catch(error => {
      console.log(error)
    })
  }

  return (
      <Paper sx={{width:'100%'}}>
        <Stack spacing={4}>
          <Button
            sx={{color:"white", backgroundColor:"#4b6896", width: "15vw", textAlign: "center", m: 4}}
            component="label"
          >
            {outputPath[0]}
            <input
              type="file"
              webkitdirectory=""
              directory=""
              onChange={handleChange}
              hidden
            />
          </Button>
          <Paper elevation={3} sx={{color: "white", width: "100%" }}> 
            <Button
              sx={{color:"white", backgroundColor:"#4b6896", width: "15vw", textAlign: "center", m: 4}}
              component="label"
              variant="contained"
              elevation={3}
              onClick={onRun}
            >
              {"Run"}
            </Button>
          </Paper> 
        </Stack>
      </Paper>
  );
}

export default Param;