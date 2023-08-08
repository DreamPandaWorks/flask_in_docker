/** @jsxImportSource @emotion/react */
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const InputVideoFiles = ({ id, name, value = '', label = '', margin = 4 }) => {
  const default_label = label;
  const [file_name, setValue] = React.useState(label);
  const onChangeEvent = (event) => {
    if (default_label == file_name) {
      setValue(event.target.value.replace(/^.*[\\\/]/, ''));
    } else {
      setValue(file_name + ', ' + event.target.value.replace(/^.*[\\\/]/, ''));
    }
  };

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
              {file_name}
            </Typography>
            <input type="hidden" name={name} value={value} />
            <input
              type="file"
              id={id}
              name={name}
              hidden
              multiple
              accept="video/*"
              onChange={onChangeEvent}
            />
          </Stack>
        </Box>
      </Button>
    </React.Fragment>
  );
};

export default InputVideoFiles;
