import React from 'react';
import PrimaryTopic from './Subjects/PrimaryTopic/PrimaryTopic';
import Box from '@mui/material/Box';
import Topics from './Subjects/Topics/Topics';
import Courses from './Courses/Courses';
import Overview from './Overview/Overview';
import MyCourses from './My Courses/MyCourses';

const PageContainer = () => {
  return (
    <Box
      sx={{
        // ml: 'auto',
        // mr: 'auto',
        // width: 850,
        px: 12,
        mt: 4,
      }}>
      <Courses></Courses>
      <Overview></Overview>
      <MyCourses></MyCourses>
      {/* <PrimaryTopic></PrimaryTopic> */}
      {/* <Topics></Topics> */}
    </Box>
  );
};

export default PageContainer;
