/** @jsxImportSource @emotion/react */
import React from 'react';
import TextField from '@mui/material/TextField';

const InputTextArea = ({
  id,
  name,
  text = '',
  rows = 5,
  changeEvent,
  placeHolder = '',
  sx = {},
  inputProps = {},
  onKeyDown = () => {},
}) => {
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

  return (
    <React.Fragment>
      <TextField
        multiline
        rows={rows}
        id={id}
        name={name}
        value={text}
        onChange={changeEvent}
        fullWidth
        size="small"
        type="text"
        placeholder={placeHolder}
        sx={_sx}
        variant="outlined"
        inputProps={inputProps}
        onKeyDown={onKeyDown}
      />
    </React.Fragment>
  );
};

export default InputTextArea;
