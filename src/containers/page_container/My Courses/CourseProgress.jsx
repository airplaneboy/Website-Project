import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const CourseProgress = ({ percentageProgress, numberCompleted, total }) => {
  return (
    <Box>
      <Typography sx={{ fontWeight: 700, fontSize: 16, textAlign: 'center' }}>
        {numberCompleted}/{total} {''}
        <span style={{ color: 'var(--color-grey)' }}>
          ({percentageProgress}%)
        </span>
      </Typography>
    </Box>
  );
};

export default CourseProgress;
