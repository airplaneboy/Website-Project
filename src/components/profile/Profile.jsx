import React from 'react';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const username = 'UserName';

const Profile = () => {
  return (
    <Link to='/profile'>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Button variant='text'>
          <Typography
            sx={{
              fontSize: 'default',
              fontWeight: 700,
              fontFamily: 'var(--font-family)',
            }}>
            Hi, {username}
          </Typography>
        </Button>
      </motion.div>
    </Link>
  );
};

export default Profile;
