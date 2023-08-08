/** @jsxImportSource @emotion/react */
import React from 'react';
import TextField from '@mui/material/TextField';

const InputNumber = ({
  id,
  name,
  number = 0,
  changeEvent,
  placeHolder = null,
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

  if (isNaN(number)) {
    number = 0;
  }

  return (
    <React.Fragment>
      <TextField
        if={id}
        name={name}
        value={number}
        onChange={changeEvent}
        fullWidth
        size="small"
        type="number"
        placeholder={placeHolder}
        sx={_sx}
        variant="outlined"
        inputProps={inputProps}
      />
    </React.Fragment>
  );
};

export default InputNumber;
