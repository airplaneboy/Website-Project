import React from 'react';

import { CoursesData } from './CoursesData';
import Typography from '@mui/material/Typography';

const Courses = () => {
  const course = CoursesData[0];
  return (
    <Typography
      variant='h2'
      sx={{
        width: 'max-content',
        color: 'text.primary',
        fontFamily: 'var(--font-family)',
        // ml: 4,
        fontWeight: '700',
        textAlign: 'left',
        marginBottom: '30px',
        pr: 0,
      }}>
      {course}
    </Typography>
  );
};

export default Courses;
