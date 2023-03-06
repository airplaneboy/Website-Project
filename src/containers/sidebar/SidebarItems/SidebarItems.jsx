import React from 'react';
import Button from '@mui/material/Button';
import { SidebarItemsList } from '../data';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';

const SidebarItems = () => {
  const defaultStyle = {
    // backgroundColor: 'var(--color-bg)',
    width: '100%',
    height: '45px',
    fontSize: '16px',
    fontFamily: 'var(--font-family)',
    fontWeight: 'inherit',
    color: 'inherit',
    justifyContent: 'flex-start',
    borderRadius: '4px 0 0px 4px',
    transitionDuration: '0s',
    '&:hover': {
      fontWeight: '700',
      borderRadius: '4px',
      border: '2px solid',
      borderRight: '2px solid',
      backgroundColor: 'var(--color-bg)',
    },
  };

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

            <ul>
              {items.map((items) => {
                const { name, icon, link } = items;
                return (
                  <li>
                    <NavLink
                      to={link}
                      style={({ isActive }) => {
                        return isActive
                          ? {
                              borderRight: 'none',
                              borderLeft: '2px solid var(--color-secondary)',
                              borderTop: '2px solid var(--color-secondary)',
                              borderBottom: '2px solid var(--color-secondary)',
                              display: 'flex',
                              fontWeight: 700,
                              borderRadius: '4px 0 0 4px',
                              height: '45px',
                              alignItems: 'center',
                              marginBottom: '8px',
                              color: 'var(--color-secondary)',
                            }
                          : {
                              display: 'flex',
                              borderRadius: '4px 0 0 4px',
                              height: '45px',
                              alignItems: 'center',
                              marginBottom: '8px',
                              color: 'var(--color-primary)',
                            };
                      }}>
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
                        sx={defaultStyle}
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
                              color: 'inherit',
                              fontSize: 16,
                              fontWeight: 'inherit',
                              width: 'max-content',
                            }}>
                            {name}
                          </Typography>
                        </Box>
                      </Button>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default SidebarItems;
