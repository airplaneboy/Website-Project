import React from 'react';
import { SubjectData } from '../../SubjectData';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import PrimaryCard from './PrimaryCard';

const PrimaryTopic = () => {
  const headingText = 'What You Need To Know';

  return (
    <Box
      sx={{
        width: '850px',
      }}>
      {SubjectData.map((objects) => {
        const { subject, topics, primary } = objects;
        const { name, details, percentageCompleted, image } = topics.find(
          (item) => item.id === primary
        );

        return (
          <>
            <Typography
              variant='h6'
              sx={{
                fontFamily: 'var(--font-secondary)',
                color: 'text.primary',
                letterSpacing: 6,
                fontWeight: 400,
                ml: 4,
              }}>
              {subject}
            </Typography>
            <Box
              sx={{
                borderTop: '1px solid var(--color-border)',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                pt: 6,
                // px: 5,
                justifyContent: 'center',
              }}>
              <PrimaryCard
                name={name}
                details={details}
                heading={headingText}
                image={image}
                percentage={percentageCompleted}></PrimaryCard>
            </Box>
          </>
        );
      })}
    </Box>
  );
};

export default PrimaryTopic;
