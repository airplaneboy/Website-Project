import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import { BsArrowRight } from 'react-icons/bs';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import { motion } from 'framer-motion';
import { IconContext } from 'react-icons/lib';
import Button from '@mui/material/Button';

const PrimaryCard = ({ name, details, heading, image, percentage }) => {
  return (
    <>
      <Card
        sx={{
          borderRadius: 3,
          width: '100%',
          backgroundColor: 'var(--color-bg)',
          mb: 5,
          border: '1px solid var(--color-border)',
        }}>
        <>
          <Box
            sx={{
              display: 'flex',
            }}>
            <CardActionArea
              sx={{
                flex: 2,
                width: '100%',
                borderRight: '1px solid var(--color-border)',
                borderRadius: '0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'stretch',
              }}>
              {/* Image */}
              <Box sx={{ height: '100%' }}>
                <CardMedia
                  sx={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                  }}
                  draggable={false}
                  component='img'
                  image={image}
                  alt=''
                />
              </Box>

              {/* Topic Progress */}
              <CardContent sx={{ background: 'var(--color-bg)' }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}>
                  <Typography
                    sx={{
                      fontSize: 'default',
                      fontFamily: 'var(--font-family)',
                      fontWeight: 500,
                    }}
                    variant='h5'>
                    {name}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      width: '100%',
                    }}>
                    <Box sx={{ width: '100%', mr: 1 }}>
                      {/* Progressbar */}
                      <LinearProgress
                        color='progress'
                        sx={{
                          height: '10px',
                          borderRadius: '4px',
                          backgroundColor: '#4B4B4B',
                        }}
                        value={percentage}
                        variant='determinate'
                      />
                    </Box>
                    <Box sx={{ width: 35 }}>
                      <Typography
                        sx={{
                          fontSize: 14,
                          fontFamily: 'var(--font-secondary)',
                        }}>
                        {percentage + '%'}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </CardActionArea>

            {/* Card Side Content */}
            <Box
              sx={{
                backgroundColor: 'var(--color-bg)',
                flex: 3,
                p: 4,
                justifyContent: 'space-evenly',
                display: 'flex',
                flexDirection: 'column',
              }}>
              <Typography
                variant='h4'
                color='primary'
                sx={{
                  fontSize: 30,
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-family)',
                  fontWeight: 700,
                  mb: 2,
                }}>
                {heading}
              </Typography>
              <Typography
                variant='p'
                sx={{
                  fontSize: 17.5,
                  fontFamily: 'var(--font-family)',
                  color: 'secondary.main',
                  width: 'auto',
                  lineHeight: 1.4,
                  pl: 1,
                  letterSpacing: '0.04em',
                }}>
                {details}
                <>
                  <Button
                    size='small'
                    variant='outlined'
                    component={motion.div}
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.995,
                    }}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      width: 'min-content',
                      textTransform: 'uppercase',
                      color: 'primary.main',
                      justifyContent: 'space-between',
                      mt: 2,
                    }}>
                    Continue
                    <IconContext.Provider value={{ size: '1.25em' }}>
                      <BsArrowRight
                        style={{ marginLeft: '8px' }}></BsArrowRight>
                    </IconContext.Provider>
                  </Button>
                </>
              </Typography>
            </Box>
          </Box>
        </>
      </Card>
    </>
  );
};

export default PrimaryCard;
