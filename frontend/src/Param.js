import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import MuiInput from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel'

const Input = styled(MuiInput)`
  width: 42px;
`;

export default function Param(props) {

    const {neighbors, setNeighbors, selected, setSelected} = props

  const handleChange = (event) => {
    setSelected({
      ...selected,
      [event.target.name]: event.target.checked,
    });
  };

    const { scina, scsorter, sctype, scpred, singler } = selected;
      const error = [scina, scsorter, sctype, scpred, singler].filter((v) => v).length < 1;

  const handleInputChange = (event) => {
    setNeighbors(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (neighbors < 0) {
      setNeighbors(0);
    } else if (neighbors > 10) {
      setNeighbors(10);
    }
  };

  return (
    <Box sx={{ display: 'flex'}}>
      <FormControl sx={{ m: 3, width: "20vw"}} component="fieldset" variant="standard" error={error}>
        <FormLabel sx={{ color : "#A9A9A9"}} component="legend">Supervised Tools</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={scina} onChange={handleChange} name="scina" />
            }
            label="scina"
          />
          <FormControlLabel
            control={
              <Checkbox checked={scsorter} onChange={handleChange} name="scsorter" />
            }
            label="scsorter"
          />
          <FormControlLabel
            control={
              <Checkbox checked={sctype} onChange={handleChange} name="sctype" />
            }
            label="sctype"
          />
        </FormGroup>
        <FormHelperText sx={{ color : "#D3D3D3"}}>Markers Required</FormHelperText>
      </FormControl>

      <FormControl
        component="fieldset"
        sx={{ m: 3, width: "20vw" }}
        variant="standard"
        error={error}
      >
        <FormLabel sx={{ color : "#A9A9A9"}} component="legend">Unsupervised Tools </FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={scpred} onChange={handleChange} name="scpred" />
            }
            label="scpred"
          />
          <FormControlLabel
            control={
              <Checkbox checked={singler} onChange={handleChange} name="singler" />
            }
            label="singler"
          />
        </FormGroup>
        <FormHelperText sx={{ color : "#D3D3D3"}}>Should Work with Most Datasets</FormHelperText>


      </FormControl>
        <FormControl sx={{ m: 3, width: "15vw"}} component="fieldset" variant="standard">
            <InputLabel htmlFor="my-input" sx={{ color : "#A9A9A9"}}>Neighbors</InputLabel>
  <Input sx = {{ color : "lightgrey"}}
      value={neighbors}
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 0,
              max: 10,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }} />
  <FormHelperText sx={{ color : "#D3D3D3"}}>Helper Text</FormHelperText>
        </FormControl>



    </Box>
  );
}