import React, { useEffect, useState } from 'react';

import './Home.css';
import UploadPg from './UploadPg.js' 

import {Tabs, Tab, Box, Typography, Paper, Toolbar, Button} from '@mui/material';
import AppBar from '@mui/material/AppBar';



/**
  useEffect(()=>{
    axios.get('http://127.0.0.1:5000/flask/hello').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, [])
**/

const styles = (theme) => ({
    toolbar: theme.mixins.toolbar,
  });

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
}


function Steps (props) {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div>
            <AppBar color="inherit" >
                <Tabs 
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    variant="fullWidth"
                >
                    <Tab label="Select Data" {...a11yProps(0)} />
                    <Tab label="Parameters" {...a11yProps(1)} />
                    <Tab label="Run Program" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                    <UploadPg/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                Under Construction
                </TabPanel>
                <TabPanel value={value} index={2}>
                Under Construction
            </TabPanel>
        </div>
    )
}

export default Steps