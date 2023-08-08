/** @jsxImportSource @emotion/react */
import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

/**
 * チェックボックス
 *
 */
const InputCheckBox = ({ id, name, value = '1', label = null, isChecked = false, changeEvent }) => {
  return (
    <React.Fragment>
      <input type="hidden" name={name} value={0} />
      <FormControlLabel
        control={
          <Checkbox
            id={id}
            name={name}
            sx={{
              color: '#FF5C40',
              '&.Mui-checked': {
                color: '#FF5C40',
              },
            }}
            onChange={changeEvent}
            checked={isChecked}
            value={value}
          />
        }
        label={label}
      />
    </React.Fragment>
  );
};

export default InputCheckBox;
