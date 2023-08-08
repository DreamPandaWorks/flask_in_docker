/** @jsxImportSource @emotion/react */
import React from 'react';
import Switch from '@mui/material/Switch';

const InputSwitch = ({ isChecked = falsem, changeEvent }) => {
  if (isChecked == false) {
    return (
      <React.Fragment>
        <Switch
          sx={{
            '& .MuiSwitch-switchBase.Mui-checked': {
              color: '#FF5C40',
              '&:hover': {
                backgroundColor: '#FF5C40',
              },
            },
            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
              backgroundColor: '#FF5C40',
            },
          }}
          onChange={changeEvent}
        />
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Switch
          sx={{
            '& .MuiSwitch-switchBase.Mui-checked': {
              color: '#FF5C40',
              '&:hover': {
                backgroundColor: '#FF5C40',
              },
            },
            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
              backgroundColor: '#FF5C40',
            },
          }}
          defaultChecked
          onChange={changeEvent}
        />
      </React.Fragment>
    );
  }
};

export default InputSwitch;
