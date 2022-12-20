import React, { useEffect, useState } from 'react';

import './Home.css';
import UploadPg from './UploadPg.js'
import Param from './Param.js'
import RunTest from './RunTest.js'

import {Tabs, Tab, Box, Typography, Paper, Toolbar, Button} from '@mui/material';
import AppBar from '@mui/material/AppBar';

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

    const handleChange = (event, newValue) => {
        props.setTab(newValue);
    };

    return (
        <div>
            <AppBar color="inherit" >
                <Tabs 
                    value={props.tab}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    variant="fullWidth"
                >
                    <Tab label="Select Data" {...a11yProps(0)} />
                    <Tab label="Parameters" {...a11yProps(1)} />
                    <Tab label="Run Program" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={props.tab} index={0}>
                    <UploadPg/>
                </TabPanel>
                <TabPanel value={props.tab} index={1}>
                 <Param/>
                </TabPanel>
                <TabPanel value={props.tab} index={2}>
                    <RunTest/>
            </TabPanel>
        </div>
    )
}

export default Steps