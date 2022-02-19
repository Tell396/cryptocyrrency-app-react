import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';


export default function Search() {
    const [search, setSearch] = useState('');
  
  
    return (
    <>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onChange={(e) => {setSearch(e.target.value)}}
      />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </>
  );
}
