/** @jsxImportSource @emotion/react */
import React from 'react';
import { styled } from '@mui/system';

const Token = styled('input')(({ value }) => ({
  value: value,
}));

const InputToken = ({ token }) => {
  return (
    <React.Fragment>
      <Token type="hidden" name="_token" value={token} />
    </React.Fragment>
  );
};

export default InputToken;
