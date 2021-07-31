import { createTheme, Theme } from '@material-ui/core/styles';

export const getTheme = (dark: boolean): Theme =>
  createTheme({
    palette: {
      type: dark ? 'dark' : 'light',
      background: {
        default: dark ? '#303030' : '#f4f4f4',
      },
      primary: {
        main: '#306441',
      },
      secondary: {
        main: '#33433d',
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
