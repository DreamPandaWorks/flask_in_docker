/** @jsxImportSource @emotion/react */
import React from 'react';
import Slider from '@mui/material/Slider';

const InputSlider = ({ value = 0, changeEvent, min = 0, max = 100, step = 1, sx = {} }) => {
  // merge sx
  const _sx = Object.assign(
    {
      color: '#FF5C40',
      '& .MuiSlider-valueLabel': { backgroundColor: '#FF5C40' },
      '& .MuiSlider-thumb': {
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
          boxShadow: 'inherit',
        },
        '&:before': {
          display: 'none',
        },
      },
    },
    sx
  );

  return (
    <React.Fragment>
      <Slider
        defaultValue={value}
        min={min}
        max={max}
        step={step}
        valueLabelDisplay="auto"
        onChange={changeEvent}
        sx={_sx}
      />
    </React.Fragment>
  );
};

export default InputSlider;
