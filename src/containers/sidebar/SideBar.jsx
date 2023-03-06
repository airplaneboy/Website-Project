import Box from '@mui/material/Box';
import React from 'react';
import SidebarItems from './SidebarItems/SidebarItems';

const SideBar = () => {
  return (
    <Box
      sx={{
        minWidth: 250,
        // ml: 8,
      }}>
      <nav
        style={{
          minWidth: 250,
          position: 'fixed',
          boxShadow:
            'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
          borderRadius: '16px 0 0 16px',
          backgroundColor: 'var(--color-bg)',
          borderRight: '1px solid var(--color-border)',
          background: 'linear-gradient(45deg, #1e1e1e, #14141499)',
        }}>
        <SidebarItems></SidebarItems>
      </nav>
    </Box>
  );
};

export default SideBar;
