import React, {useEffect, useState} from "react";
import {FormControl, Select, MenuItem, InputLabel, Button} from '@mui/material';
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
      <div>
          <Button
            sx={{color:"white", backgroundColor:"#4b6896", width: "15vw", textAlign: "center"}}
            component="label"
        >
              {"Test"}
            <input
                type="file"
                webkitdirectory
                hidden

            />
        </Button>
          <form>
  <input type="file" webkitdirectory />
  <button type="submit">Submit</button>
</form>

        {getMessage}
      </div>
  );
}

export default Param;