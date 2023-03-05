import React from 'react';
import logo from '../../assets/Icons/random-logo.svg';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0.8 }}
      transition={{ type: 'tween', duration: 0.25 }}
      whileHover={{ opacity: 1, scale: 1.025 }}
      whileTap={{ scale: 0.975 }}>
      <Box>
        <Button
          sx={{
            textTransform: 'none',
            color: 'text.primary',
            '&:hover': { backgroundColor: 'transparent' },
          }}
          variant='text'
          disableRipple>
          <img src={logo} alt='logo' />
          <Typography
            variant='h5'
            sx={{
              ml: 1,
              typography: 'logo',
              textTransform: 'capitalize',
            }}>
            CompanyName
          </Typography>
        </Button>
      </Box>
    </motion.div>
  );
};

export default Logo;
