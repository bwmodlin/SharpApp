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

    const [dataFile, setDataFile] = useState(["Select Data File", null])
    //const [toolPreds, setToolPreds] = useState("Select Tool Preds")
    const [markerFile, setMarkerFile] = useState(["Select Marker File", null])
    const [configFile, setConfigFile] = useState(["Select Config File", null])
    const [refFile, setRefFile] = useState(["Select Reference File", null])
    const [labelFile, setLabelFile] = useState(["Select Label File", null])

    const [outputPath, setOutputPath] = useState(["Set RTools Output Path", null])

    const [neighbors, setNeighbors] = React.useState(2);

    const [selected, setSelected] = React.useState({

      scina: true,
      scsorter: true,
      sctype: true,
      scpred: true,
      singler: true
  });

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
                    <Tab label="Run Tools" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={props.tab} index={0}>
                    <UploadPg
                        dataFile={dataFile}
                        setDataFile={setDataFile}
                        markerFile={markerFile}
                        setMarkerFile={setMarkerFile}
                        configFile={configFile}
                        setConfigFile={setConfigFile}
                        refFile={refFile}
                        setRefFile={setRefFile}
                        labelFile={labelFile}
                        setLabelFile={setLabelFile}
                    />
                </TabPanel>
                <TabPanel value={props.tab} index={1}>
                 <Param
                     neighbors={neighbors}
                     setNeighbors={setNeighbors}
                     selected={selected}
                     setSelected={setSelected}
                 />
                </TabPanel>
                <TabPanel value={props.tab} index={2}>
                    <RunTest
                      dataFile={dataFile}
                      markerFile={markerFile}
                      configFile={configFile}
                      refFile={refFile}
                      labelFile={labelFile}
                      neighbors={neighbors}
                      selected={selected}
                      outputPath={outputPath}
                      setOutputPath={setOutputPath}

                    />
            </TabPanel>
        </div>
    )
}

export default Steps