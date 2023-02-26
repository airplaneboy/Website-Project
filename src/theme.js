import { createTheme } from '@mui/material';

const Theme = createTheme({
  palette: {
    mode: 'dark',
    transparent: '#00000000',
    primary: {
      main: '#00B2FF',
    },
    secondary: {
      main: '#959CB4',
    },
    background: '#1E1E1E',
    text: {
      primary: '#fefefe',
      secondary: '#888D93',
    },
    progress: { main: '#00B2FF' },
    progress2: { main: '#FEFEFE' },
  },
  typography: {
    button: {
      textTransform: 'none',
      fontFamily: 'var(--font-family)',
    },
    fontSize: 16,
    body1: {
      fontFamily: 'var(--font-family)',
    },
    body2: {
      fontFamily: 'var(--font-secondary)',
    },
    logo: {
      fontFamily: 'var(--font-family)',
      fontWeight: 700,
    },
  },
});

export default Theme;
