import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'
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
        <Paper sx={{p:1}}>
        <FormLabel sx={{ color : "#505050"}} component="legend">Supervised Tools</FormLabel>
        <FormHelperText sx={{ color : "#707070"}}>Markers Required</FormHelperText>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={scina} onChange={handleChange} name="scina" />
            }
            label="SCINA"
          />
          <FormControlLabel
            control={
              <Checkbox checked={scsorter} onChange={handleChange} name="scsorter" />
            }
            label="scSorter"
          />
          <FormControlLabel
            control={
              <Checkbox checked={sctype} onChange={handleChange} name="sctype" />
            }
            label="scType"
          />
        </FormGroup>
        </Paper>
      </FormControl>

      <FormControl
        component="fieldset"
        sx={{ m: 3, width: "20vw" }}
        variant="standard"
        error={error}
      >
        <Paper sx={{p:1}}>
        <FormLabel sx={{ color : "#505050"}} component="legend">Unsupervised Tools </FormLabel>
        <FormHelperText sx={{ color : "#707070"}}>Should Work with Most Datasets</FormHelperText>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={scpred} onChange={handleChange} name="scpred" />
            }
            label="scPred"
          />
          <FormControlLabel
            control={
              <Checkbox checked={singler} onChange={handleChange} name="singler" />
            }
            label="Singler"
          />
        </FormGroup>
      </Paper>
      </FormControl>
        <FormControl sx={{ m: 3, width: "20vw"}} component="fieldset" variant="standard">
        <Paper sx={{p:2}}>
          <FormLabel sx={{ color : "#505050"}} component="legend"> Neighbors for KNN Graph </FormLabel> 
          <FormHelperText sx={{ color : "#707070"}}>Two is a good default if you are in need of one</FormHelperText>  
          <Input sx = {{ color : "#505050"}}
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
          </Paper>
        </FormControl>



    </Box>
  );
}