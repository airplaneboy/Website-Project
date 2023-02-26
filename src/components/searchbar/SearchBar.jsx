import React from 'react';
import Button from '@mui/material/Button';
import { RiSearch2Line } from 'react-icons/ri';
import { IconContext } from 'react-icons/lib';
import { motion } from 'framer-motion';
import Box from '@mui/system/Box';

const SearchBar = () => {
  return (
    <Box sx={{ width: 0, mx: 4 }}>
      <motion.div
        whileHover={{ width: 250 }}
        initial={{ width: 200 }}
        whileTap={{ scale: 0.9, width: 150 }}>
        <Button
          sx={{
            width: '100%',
            height: '40px',
            backgroundColor: 'transparent',
            fontFamily: 'var(--font-secondary)',
            fontWeight: '400',
            border: '1px solid var(--color-border)',
            color: 'var(--color-primary)',
            px: 1,
            py: 0,
            fontSize: '14px',
            justifyContent: 'space-between',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          }}
          variant='contained'>
          Search
          <IconContext.Provider
            value={{
              size: '1.25em',
            }}>
            <RiSearch2Line />
          </IconContext.Provider>
        </Button>
      </motion.div>
    </Box>
  );
};

export default SearchBar;
