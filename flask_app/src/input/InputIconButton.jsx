/** @jsxImportSource @emotion/react */
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import CircleIcon from '@mui/icons-material/Circle';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';

const getIconFromName = (icon_name = '') => {
  switch (icon_name) {
    case 'add':
      return <AddIcon />;
    case 'delete':
      return <DeleteIcon />;
    case 'remove':
      return <RemoveIcon />;
    default:
      return <CircleIcon />;
  }
};

const InputIconButton = ({ icon = '', clickEvent = () => {}, sx = {} }) => {
  const _sx = Object.assign(
    {
      border: '1px solid #4B4A48',
      borderRadius: 1,
      backgroundColor: '#232323',
      color: '#DEDEDE',
      p: 1,
      width: '100%',
      '&:hover': {
        border: '1px solid #4B4A48',
        boxShadow: 'none',
      },
    },
    sx
  );

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        startIcon={getIconFromName(icon)}
        onClick={clickEvent}
        sx={_sx}
      ></Button>
    </React.Fragment>
  );
};

export default InputIconButton;
