/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

const InputCurrency = ({
  id,
  name,
  currency,
  changeEvent,
  placeHolder = '0',
  sx = {},
  inputProps = {},
}) => {
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

  // merge sx
  const _input_props = Object.assign(
    {
      startAdornment: (
        <InputAdornment position="start">
          <CurrencyYenIcon sx={{ color: '#4B4A48' }} />
        </InputAdornment>
      ),
    },
    inputProps
  );

  return (
    <React.Fragment>
      <TextField
        id={id}
        name={name}
        value={currency}
        placeholder={placeHolder}
        fullWidth
        size="small"
        type="number"
        onChange={changeEvent}
        sx={_sx}
        InputProps={_input_props}
      />
    </React.Fragment>
  );
};

export default InputCurrency;
