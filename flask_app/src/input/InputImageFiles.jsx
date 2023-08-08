/** @jsxImportSource @emotion/react */
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const InputImageFiles = ({ id, name, changeEvent, value = '', label = '', margin = 4 }) => {
  return (
    <React.Fragment>
      <Button
        variant="outlined"
        fullWidth
        size="small"
        component="label"
        sx={{
          border: '1px solid rgba(0, 0, 0, 0.0)',
          borderRadius: 6,
          backgroundColor: '#CACACA',
          color: '#4B4A48',
          '&:hover': {
            border: '1px solid rgba(0, 0, 0, 0.0)',
            backgroundColor: '#DBDBDB',
            boxShadow: 'none',
          },
        }}
      >
        <Box sx={{ m: margin }}>
          <Stack direction="row" spacing={1}>
            <FileUploadIcon />
            <Typography variant="body1" gutterBottom>
              {label}
            </Typography>
            <input type="hidden" name={name} value={value} />
            <input
              type="file"
              id={id}
              name={name}
              hidden
              multiple="multiple"
              accept="image/*"
              onChange={changeEvent}
            />
          </Stack>
        </Box>
      </Button>
    </React.Fragment>
  );
};

export default InputImageFiles;
