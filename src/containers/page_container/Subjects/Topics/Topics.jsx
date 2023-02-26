import React from 'react';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import { motion } from 'framer-motion';

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import { SubjectData } from '../../SubjectData';
import { Typography } from '@mui/material';

const Topics = () => {
  return (
    <Grid2
      sx={{
        px: 2,
        pt: 2,
      }}
      container
      spacing={2}>
      {SubjectData.map((objects) => {
        const { subject, topics, primary } = objects;

        return topics.map((items) => {
          const { name, details, percentageCompleted, image } = items;

          return (
            // GridItem

            <Grid2 xs={3}>
              <Card
                component={motion.div}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                sx={{
                  borderRadius: 3,
                  border: '1px solid var(--color-border)',
                  '&:hover': {
                    border: '1px solid var(--color-secondary)',
                  },
                }}>
                {/* Image */}
                <CardMedia
                  component='img'
                  draggable={false}
                  image={image}></CardMedia>
                <CardActionArea>
                  {/* Content */}
                  <CardContent>
                    <Stack spacing={0.5}>
                      {/* Topic and Completion */}
                      <Box
                        sx={{
                          px: 1,
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          alignItems: 'baseline',
                        }}>
                        {/* Topic */}
                        <Typography
                          sx={{
                            textAlign: 'center',
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            fontSize: 14,
                            fontWeight: 600,
                            whiteSpace: 'nowrap',
                            width: '100%',
                          }}>
                          {name}
                        </Typography>

                        {/* Percentage */}
                        {/* <Typography
                          sx={{
                            fontSize: 10,
                            width: '100%',
                            // textAlign: 'end',
                            color: 'secondary.main',
                          }}>
                          {percentageCompleted + '% Completed'}
                        </Typography> */}
                      </Box>

                      {/* Progressbar */}
                      <LinearProgress
                        color='progress2'
                        sx={{
                          height: '5px',
                          borderRadius: 10,
                          backgroundColor: '#4B4B4B',
                        }}
                        value={percentageCompleted}
                        variant='determinate'
                      />
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid2>
          );
        });
      })}
    </Grid2>
  );
};

export default Topics;
