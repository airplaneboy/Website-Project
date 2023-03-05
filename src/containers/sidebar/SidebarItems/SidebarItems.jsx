import React from 'react';
import Button from '@mui/material/Button';
import { SidebarItemsList } from '../data';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { motion } from 'framer-motion';
import { Box } from '@mui/system';

const SidebarItems = () => {
  return (
    <>
      {SidebarItemsList.map((objects) => {
        const { heading, items } = objects;
        return (
          <React.Fragment>
            <Typography
              variant='h4'
              sx={{
                fontWeight: '700',
                fontFamily: 'var(--font-family)',
                fontSize: '14px',
                textTransform: 'uppercase',
                textAlign: 'center',
                color: 'var(--color-grey)',
                mb: 3,
                mt: 4,
              }}>
              {heading}
            </Typography>

            <Stack direction='column'>
              {items.map((items) => {
                const { name, icon } = items;
                return (
                  <Button
                    color='transparent'
                    disableElevation={true}
                    disableRipple
                    whileHover={{
                      scale: 1.1,
                    }}
                    whileTap={{
                      scale: 1,
                    }}
                    component={motion.div}
                    sx={{
                      // backgroundColor: 'var(--color-bg)',
                      width: 'auto',
                      height: '45px',
                      fontSize: '16px',
                      fontFamily: 'var(--font-family)',
                      fontWeight: '500',
                      color: 'var(--color-primary)',
                      justifyContent: 'flex-start',
                      mb: 1,
                      borderRadius: '4px 0 0px 4px',
                      transitionDuration: '0s',
                      '&:focus': {
                        border: '2px solid var(--color-secondary)',
                        borderRight: 'none',
                        color: 'var(--color-secondary)',
                        fontWeight: '700',
                        backgroundColor: 'var(--color-bg)',
                      },
                      '&:hover': {
                        fontWeight: '700',
                        borderRadius: '4px',
                        border: '2px solid',
                        borderRight: '2px solid',
                        backgroundColor: 'var(--color-bg)',
                      },
                    }}
                    variant='contained'>
                    <Box
                      sx={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        display: 'flex',
                      }}>
                      <img
                        style={{ marginRight: '10px' }}
                        src={icon}
                        alt=''
                        width='22.5'
                        height='22.5'></img>
                      <Typography
                        sx={{
                          fontSize: 16,
                          fontWeight: 500,
                          width: 'max-content',
                        }}>
                        {name}
                      </Typography>
                    </Box>
                  </Button>
                );
              })}
            </Stack>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default SidebarItems;
