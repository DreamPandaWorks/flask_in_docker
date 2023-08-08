/** @jsxImportSource @emotion/react */
import React from 'react';
import { styled } from '@mui/system';

const Hidden = styled('input')(({ value }) => ({
  value: value,
}));

const InputHidden = ({ name, value }) => {
  return (
    <React.Fragment>
      <Hidden type="hidden" name={name} value={value} />
    </React.Fragment>
  );
};

export default InputHidden;
