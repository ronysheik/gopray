import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FetchDataContext } from '../contexts/FetchDataContext';

interface MethodSelectProps{
   values: any;
}

export default function MethodSelect(props: MethodSelectProps) {
  const [method, setMethod] = React.useState('');
  const fetchDataContext = React.useContext(FetchDataContext);
  if(!fetchDataContext){
    return null;
  }

  const handleChange = (event: SelectChangeEvent) => {
    const selectedMethod = event.target.value as string;
    setMethod(selectedMethod);
    fetchDataContext.updatePrayer(selectedMethod);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: '15px'}}>
      <FormControl sx={{width: '400px'}}>
        <InputLabel sx={{ color: 'GrayText' }}>Calculation Method</InputLabel>
        <Select
          sx={{color: 'white'}}
          value={method !== '' ? method : 'Umm Al-Qura University, Makkah'}
          label="Calculation Method"
          onChange={handleChange}
        >
          {props.values.map((item: any) => (
            <MenuItem sx={{ color: 'GrayText' }} key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
