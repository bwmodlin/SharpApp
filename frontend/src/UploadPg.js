import React, { useEffect, useState } from 'react';

import {Container, Grid, Box, Button, Paper, Divider} from '@mui/material';
import Stack from '@mui/material/Stack';

function UploadPg(props) {
    const {dataFile, setDataFile, markerFile, setMarkerFile, configFile,
        setConfigFile, refFile, setRefFile, labelFile, setLabelFile} = props


    const handleChange = (buttonID, event) => {
        const item = event.target.files.item(0)

        if (item == null) {
            return
        }

        switch(buttonID) {
            case 0:
                setDataFile([item.name, item.path])
                break
            case 1:
                setMarkerFile([item.name, item.path])
                break
            case 2:
                setConfigFile([item.name, item.path])
                break
            case 3:
                setRefFile([item.name, item.path])
                break
            case 4:
                setLabelFile([item.name, item.path])
                break
        }
    };

  return (

      <div>
      <Paper sx={{ display: 'flex', justifyContent: 'center', p:3, width: "70vw"}}>
      <Stack
        direction="column"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={1.0}
      >
        <Button
            sx={{color:"white", backgroundColor:"#4b6896", width: "50vw", textAlign: "center", }}
            component="label"
        >
            {dataFile[0]}
            <input
                type="file"
                onChange={(event) => handleChange(0, event)}
                hidden
            />
        </Button>
          <Button
            sx={{color:"white", backgroundColor:"#4b6896", width: "50vw", textAlign: "center"}}
            component="label"
        >
            {markerFile[0]}
            <input
                type="file"
                onChange={(event) => handleChange(1, event)}
                hidden
            />
        </Button>
          <Button
            sx={{color:"white", backgroundColor:"#4b6896", width: "50vw", textAlign: "center"}}
            component="label"
        >
            {configFile[0]}
            <input
                type="file"
                onChange={(event) => handleChange(2, event)}
                hidden
            />
        </Button>
          <Button
            sx={{color:"white", backgroundColor:"#4b6896", width: "50vw", textAlign: "center"}}
            component="label"
        >
            {refFile[0]}
            <input
                type="file"
                onChange={(event) => handleChange(3, event)}
                hidden
            />
        </Button>
          <Button
            sx={{color:"white", backgroundColor:"#4b6896", width: "50vw", textAlign: "center"}}
            component="label"
        >
            {labelFile[0]}
            <input
                type="file"
                onChange={(event) => handleChange(4, event)}
                hidden
            />
        </Button>
      </Stack>
      </Paper>
    </div>

      /*<Grid container className={"Upload-page"} justifyContent="flex-end">
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
      </Grid>*/

  );
}

export default UploadPg;