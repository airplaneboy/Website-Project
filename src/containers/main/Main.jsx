import React from 'react';
import SideBar from '../sidebar/SideBar';
import PageContainer from '../page_container/PageContainer';
import Stack from '@mui/system/Stack';

const Main = () => {
  return (
    <Stack
      direction='row'
      sx={{
        pt: 8,
        maxWidth: 1200,
        ml: 'auto',
        mr: 'auto',
      }}>
      <SideBar></SideBar>
      <PageContainer></PageContainer>
    </Stack>
  );
};

export default Main;
