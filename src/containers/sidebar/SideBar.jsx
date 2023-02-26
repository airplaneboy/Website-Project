import Box from '@mui/material/Box';
import React from 'react';
import SidebarItems from './SidebarItems/SidebarItems';
import { motion } from 'framer-motion';

const SideBar = () => {
  return (
    <Box
      component={motion.div}
      whileHover={{
        width: 270,
      }}
      sx={{
        width: 250,
        ml: 3,
        borderRight: '1px solid var(--color-border)',
      }}>
      <nav>
        <SidebarItems></SidebarItems>
      </nav>
    </Box>
  );
};

export default SideBar;
