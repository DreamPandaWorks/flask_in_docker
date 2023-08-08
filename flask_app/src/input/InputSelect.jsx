import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const InputSelect = ({ items = [], name = '', selctedIndex = 0, changeEvent = () => {} }) => {
  return (
    <React.Fragment>
      <ThemeProvider
        theme={createTheme({
          palette: { primary: { main: '#4B4A48' } },
          components: {
            MuiMenuItem: {
              styleOverrides: {
                root: {
                  '&.Mui-selected': {
                    backgroundColor: 'rgba(255, 92, 64, 0.7)',
                    '&.Mui-focusVisible': { background: '#FF6E75' },
                  },
                },
              },
            },
          },
        })}
      >
        <FormControl sx={{ minWidth: '100%', backgroundColor: '#FFFFFF' }}>
          <Select
            sx={{
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#4B4A48',
              },
              '& .MuiSvgIcon-root': {
                color: 'white',
              },
            }}
            size="small"
            name={name}
            value={selctedIndex}
            onChange={changeEvent}
          >
            {Object.keys(items).map((index) => (
              <MenuItem key={`${Math.random().toString(32).substring(2)}_${index}`} value={index}>{items[index]}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default InputSelect;
