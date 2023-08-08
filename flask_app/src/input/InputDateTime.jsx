/** @jsxImportSource @emotion/react */
import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const InputDateTime = ({
  id,
  name,
  datetime = null,
  date = null,
  time = null,
  changeEvent,
  sx = {},
  inputProps = {},
}) => {
  // merge sx
  const _sx = Object.assign(
    {
      border: '1px solid #4B4A48',
      borderRadius: 1,
      backgroundColor: '#FFFFFF',
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
    },
    sx
  );

  // merge input props
  const _inputProps = Object.assign(
    {
      startAdornment: (
        <InputAdornment position="start">
          <CalendarMonthIcon sx={{ color: '#4B4A48' }} />
        </InputAdornment>
      ),
    },
    inputProps
  );

  // 日付時間で渡された場合
  let _datetime = null;
  if (datetime != null) {
    _datetime = datetime.replace(/\//g, '-');
  }
  // 日付のみが渡された場合
  else if (datetime == null && date != null && time == null) {
    date = date.replace(/\//g, '-');
    _datetime = date & ' 00:00';
  }
  // 日付と時間が渡された場合
  else if (date != null && time != null) {
    date = date.replace(/\//g, '-');
    _datetime = date.trim() & ' ' & time.trim();
  } else {
    _datetime = Date.now();
  }

  return (
    <React.Fragment>
      <TextField
        id={id}
        name={name}
        value={_datetime}
        fullWidth
        size="small"
        type="datetime-local"
        onChange={changeEvent}
        sx={_sx}
        InputProps={_inputProps}
      />
    </React.Fragment>
  );
};

export default InputDateTime;
