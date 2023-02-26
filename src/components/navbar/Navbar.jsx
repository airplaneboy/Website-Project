import React from 'react';
import Logo from '../logo/Logo';
import SearchBar from '../searchbar/SearchBar';
import Courses from '../courses/Courses';
import Profile from '../profile/Profile';
import Stack from '@mui/material/Stack';
import Box from '@mui/system/Box';

const Navbar = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        borderBottom: '1px solid var(--color-border)',
        height: 70,
        width: '100%',
        ml: 'auto',
        mr: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'var(--color-bg)',
        zIndex: 1,
      }}>
      <Box sx={{ maxWidth: 1200, width: '100%', height: '100%' }}>
        <Stack
          sx={{ width: '100%', height: '100%' }}
          direction='row'
          justifyContent='space-between'
          alignItems='center'>
          <Stack direction='row'>
            <Courses></Courses>
            <SearchBar></SearchBar>
          </Stack>
          <Logo></Logo>
          <Profile></Profile>
        </Stack>
      </Box>
    </Box>
  );
};

export default Navbar;
