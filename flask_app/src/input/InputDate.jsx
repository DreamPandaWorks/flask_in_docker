/** @jsxImportSource @emotion/react */
import * as React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const InputDate = ({ id, name, date = null, sx = {}, input_props = {}, changeEvent }) => {
  // 日付型への変換
  let _date = null;
  if (date != null) {
    _date = date.replace(/\//g, '-');
  }

  // merge sx
  const _sx = Object.assign(
    {
      border: '1px solid #4B4A48',
      borderRadius: 1,
      backgroundColor: '#FFFFFF',
      color: '#4B4A48',
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
    },
    sx
  );

  // merge input_props
  const _input_props = Object.assign(
    {
      startAdornment: (
        <InputAdornment position="start">
          <CalendarMonthIcon sx={{ color: '#4B4A48' }} />
        </InputAdornment>
      ),
    },
    input_props
  );

  return (
    <React.Fragment>
      <TextField
        id={id}
        name={name}
        value={_date}
        fullWidth
        size="small"
        type="date"
        onChange={changeEvent}
        sx={_sx}
        InputProps={_input_props}
      />
    </React.Fragment>
  );
};

export default InputDate;
