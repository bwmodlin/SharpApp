import React, { useEffect, useState } from 'react';

import {Container, Grid, Box, Button, Paper} from '@mui/material';

function UploadPg() {

    const [text, setText] = useState("Click to Upload")

    const handleChange = (event) => {
        console.log(text)
        console.log(event.target.files.item(0).name)
        setText(event.target.files.item(0).name)
    };

  return (

      <Grid container className={"Upload-page"} justifyContent="flex-end">
        <Button 
            sx={{color:"white", backgroundColor:"#4b6896"}}
            component="label"
        >
            {text}
            <input
                type="file"
                onChange={handleChange}
                hidden
            />
        </Button>
      </Grid>

  );
}

export default UploadPg;