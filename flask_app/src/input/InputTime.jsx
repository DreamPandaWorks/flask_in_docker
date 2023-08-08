import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export function InputTime({ time = null, changeEvent }) {
  const correct_time_string = time.match(/^([01]?[0-9]|2[0-3]):([0-5][0-9])$/);
  if (!correct_time_string) time = null;

  return (
    <React.Fragment>
      <TextField
        value={time}
        fullWidth
        size="small"
        type="time"
        onChange={changeEvent}
        sx={{
          border: '1px solid #4B4A48',
          borderRadius: 1,
          backgroundColor: '#232323',
          color: '#DEDEDE',
          // ホバーした場合
          '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
            borderBottomColor: '#746213',
          },
          '& .MuiOutlinedInput-root': {
            // 単純にフォーカスした場合
            '&:hover fieldset': {
              border: '1px solid #4B4A48',
            },
            // フォーカスがある状態でホバーを外した場合
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderWidth: 0,
            },
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccessTimeIcon sx={{ color: '#DEDEDE' }} />
            </InputAdornment>
          ),
        }}
      />
    </React.Fragment>
  );
}

export default InputTime;
