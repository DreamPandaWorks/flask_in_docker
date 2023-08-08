/** @jsxImportSource @emotion/react */
import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

const InputRadio = ({ name, items = [], checkedItem, changeEvent }) => {
  return (
    <React.Fragment>
      <RadioGroup row onChange={changeEvent}>
        {items.map((item, index) => (
          <FormControlLabel
            key={`${item}_${index}`}
            value={index}
            name={name}
            control={
              <Radio
                checked={checkedItem == index}
                onChange={changeEvent}
                sx={{
                  color: '#FF5C40',
                  '&.Mui-checked': {
                    color: '#FF5C40',
                  },
                }}
              />
            }
            label={item}
            sx={{ color: '#4B4A48' }}
          />
        ))}
      </RadioGroup>
    </React.Fragment>
  );
};

export default InputRadio;
