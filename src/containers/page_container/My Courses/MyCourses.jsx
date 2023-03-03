import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import CourseItem from './CourseItem';
import CourseProgress from './CourseProgress';
import SubjectData from '../SubjectData';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';

const MyCourses = () => {
  return (
    <Box sx={{ backgroundColor: '#14141499', p: 2, borderRadius: 4 }}>
      <Typography
        variant='h5'
        sx={{ fontFamily: 'var(--font-family)', fontWeight: 700, mb: 4 }}>
        My Courses
      </Typography>

      {/* Course Grid */}
      <Grid2 container spacing={2}>
        {/* Course and Progress */}
        {SubjectData.map((items) => {
          const { subject, topics } = items;

          return (
            <Grid2 className='Parent Box' xs={6}>
              <Grid2
                container
                spacing={0}
                sx={{
                  mb: 2,
                  width: '100%',
                  color: 'var(--color-grey)',
                  pr: 2,
                  borderBottom: '2px solid var(--color-border)',
                }}>
                <Grid2 xs={8}>
                  <Typography sx={{ fontWeight: 700 }}>{subject}</Typography>
                </Grid2>
                <Grid2 xs={4}>
                  <Typography sx={{ fontWeight: 700, textAlign: 'center' }}>
                    Progress
                  </Typography>
                </Grid2>
              </Grid2>

              {/* Course Topic and Progress Information */}
              {topics.map((items) => {
                const { name, percentageCompleted, completed, total } = items;

                return (
                  <Box
                    component={motion.div}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>
                    <Grid2
                      container
                      spacing={2}
                      sx={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <Button
                        variant=''
                        sx={{ width: '100%', borderRadius: 2 }}>
                        <Grid2 xs={8}>
                          <CourseItem CourseTitle={name}></CourseItem>
                        </Grid2>
                        <Grid2 xs={4} sx={{ display: 'flex' }}>
                          <CourseProgress
                            percentageProgress={percentageCompleted}
                            numberCompleted={completed}
                            total={total}></CourseProgress>
                        </Grid2>
                      </Button>
                    </Grid2>
                  </Box>
                );
              })}
            </Grid2>
          );
        })}
      </Grid2>
    </Box>
  );
};

export default MyCourses;
