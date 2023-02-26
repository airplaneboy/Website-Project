import React from 'react';
import PrimaryTopic from './Subjects/PrimaryTopic/PrimaryTopic';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import Topics from './Subjects/Topics/Topics';

const PageContainer = () => {
  let courseText = `> National Courses`;
  return (
    <Box
      sx={{
        ml: 'auto',
        mr: 'auto',
        width: 850,
        mt: 4,
      }}>
      <Typography
        component={motion.h3}
        initial={{ borderColor: '#c1c1c1' }}
        animate={{ borderColor: '#c1c1c100' }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          type: 'tween',
          ease: 'backInOut',
        }}
        variant='h3'
        sx={{
          width: 'max-content',
          color: 'text.secondary',
          fontFamily: 'var(--font-secondary)',
          ml: 4,
          // fontWeight: '700',
          textAlign: 'left',
          marginBottom: '30px',
          pr: 0,
          borderRight: '20px solid',
        }}>
        {courseText}
      </Typography>
      <PrimaryTopic></PrimaryTopic>
      <Topics></Topics>
    </Box>
  );
};

export default PageContainer;
