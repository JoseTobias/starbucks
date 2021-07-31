import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { useAppSelector } from 'hooks';
import { selectTheme } from 'store/theme';
import { getTheme } from 'themes';

import Routes from './routes';

const App: React.FC = () => {
  const themeState = useAppSelector(selectTheme);
  return (
    <ThemeProvider theme={getTheme(themeState.isDark)}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
