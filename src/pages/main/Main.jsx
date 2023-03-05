import React from 'react';
import SideBar from '../../containers/sidebar/SideBar';
import PageContainer from '../../containers/page_container/PageContainer';
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
        pb: 10,
      }}>
      <SideBar></SideBar>
      <PageContainer></PageContainer>
    </Stack>
  );
};

export default Main;
