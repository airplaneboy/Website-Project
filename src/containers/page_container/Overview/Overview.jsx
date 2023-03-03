import React from 'react';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import OverviewData from './OverviewData';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import Tooltip from '@mui/material/Tooltip';

const Overview = () => {
  return (
    <Box>
      {/* Heading */}
      <Typography
        variant='h5'
        sx={{ fontFamily: 'var(--font-family)', fontWeight: 700 }}>
        Overview
      </Typography>

      <Grid2 container spacing={2} sx={{ width: '100%', my: 2 }}>
        {OverviewData.map((items) => {
          const { itemTitle, icons, color, value } = items;
          console.log(color);

          return (
            <Grid2 xs={4}>
              <Box
                sx={{
                  p: 2,
                  minWidth: 200,
                  // my: 3,
                  width: 'auto',
                  height: 150,
                  borderRadius: 4,
                  backgroundColor: 'var(--color-bg)',
                  // border: '1px solid var(--color-border)',
                  boxShadow:
                    'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
                }}>
                {/* Title and Icon */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <i style={{ color: `${color}` }}>{icons}</i>
                  <Tooltip title={itemTitle}>
                    <Typography
                      sx={{
                        textAlign: 'start',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                        width: 'max-content',
                        fontSize: 16,
                        fontWeight: 700,
                        ml: 1,
                        color: 'var(--color-grey)',
                      }}>
                      {itemTitle}
                    </Typography>
                  </Tooltip>
                </Box>
                {/* Value */}
                <Box>
                  <Typography
                    variant='h2'
                    sx={{
                      fontFamily: 'var(--font-secondary)',
                      fontWeight: 700,
                      // fontSize: 64,
                      textDecoration: 'underline',
                      textDecorationColor: `${color}`,
                    }}>
                    {value}
                  </Typography>
                </Box>
              </Box>
            </Grid2>
          );
        })}
      </Grid2>
    </Box>
  );
};

export default Overview;
