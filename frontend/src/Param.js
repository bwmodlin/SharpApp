import React, {useEffect, useState} from "react";
import {FormControl, Select, MenuItem, InputLabel} from '@mui/material';

function Param() {
    const [maxWidth, setMaxWidth] = useState("xs")

    const handleMaxWidthChange = (event) => {
        setMaxWidth(
            event.target.value,
        );
    }
  return (

      <div className={"App-background"}>
        <FormControl sx={{ mt: 2, minWidth: 120 }}>
              <InputLabel htmlFor="max-width">maxWidth</InputLabel>
              <Select
                autoFocus
                value={maxWidth}
                onChange={handleMaxWidthChange}
                label="maxWidth"
                inputProps={{
                  name: 'max-width',
                  id: 'max-width',
                }}
              >
                <MenuItem value="nah">false</MenuItem>
                <MenuItem value="xs">xs</MenuItem>
                <MenuItem value="sm">sm</MenuItem>
                <MenuItem value="md">md</MenuItem>
                <MenuItem value="lg">lg</MenuItem>
                <MenuItem value="xl">xl</MenuItem>
              </Select>
            </FormControl>
      </div>
  );
}

export default Param;