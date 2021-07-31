import { createTheme, Theme } from '@material-ui/core/styles';

export const getTheme = (dark: boolean): Theme =>
  createTheme({
    palette: {
      type: dark ? 'dark' : 'light',
      primary: {
        main: '#227baa',
      },
      secondary: {
        main: '#fe0000',
      },
    },
    shape: { borderRadius: 8 },
    props: {
      MuiIconButton: {
        style: {
          borderRadius: '8px',
        },
      },
    },
    typography: {
      button: {
        textTransform: 'none',
      },
    },
  });
