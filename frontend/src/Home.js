import React, { useEffect, useState } from 'react';
import axios from 'axios'

import './Home.css';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';

/**
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

 */


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

function Home (props) {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div style={{margin: "5%"}} className="hbuttons">
            <Button style={{marginRight: "5%"}} variant="outlined" size="medium">
                Test
            </Button>
            <Button style={{marginRight: "5%"}} variant="outlined" size="medium">
                Huh
            </Button>
            <div>
                hi
            </div>
        </div>

    )
}

export default Home