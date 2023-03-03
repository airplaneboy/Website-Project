import React from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';

const Courses = () => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <Box>
        <Button
          variant='text'
          color='primary'
          sx={{
            fontWeight: '700',
            textTransform: 'none',
            fontSize: 'default',
            fontFamily: 'var(--font-family)',
          }}>
          Courses<MdArrowDropDown></MdArrowDropDown>
        </Button>
      </Box>
    </motion.div>
  );
};

export default Courses;
