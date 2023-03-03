import React from 'react';
import Box from '@mui/material/Box';
import './footer.css';
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          justifyContent: 'center',
          height: '5em',
          background: '#0d0d0d',
          mt: 10,
          position: 'absolute',
        }}>
        <Typography>Footer Section</Typography>
      </Box>
    </footer>
  );
};

export default Footer;
