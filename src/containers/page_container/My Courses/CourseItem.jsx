import React from 'react';
import Box from '@mui/material/Box';
import Image from '../../../assets/images/cropped-pexels-pixabay-256417 1 (1).jpg';
import { Typography } from '@mui/material';

const CourseItem = ({ CourseTitle }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <img
        style={{ width: '40px', height: '40px', borderRadius: '8px' }}
        alt=''
        src={Image}></img>
      <Typography
        sx={{
          textAlign: 'start',
          ml: 1,
          fontWeight: 700,
          fontSize: 16,
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          width: '100%',
        }}>
        {CourseTitle}
      </Typography>
    </Box>
  );
};

export default CourseItem;
