import React from 'react';

import {
  IconButton,
  Link,
  AppBar,
  Container,
  Toolbar,
  Card,
} from '@material-ui/core';
import { ToggleOffOutlined, ToggleOn } from '@material-ui/icons';

interface Props {
  theme: { isDark: boolean };
  toggleTheme: () => void;
}

import { useStyles } from './styles';

const Header: React.FC<Props> = ({ theme, toggleTheme }) => {
  const classes = useStyles();

  return (
    <AppBar elevation={0} position="sticky" color="transparent">
      <Card className={classes.cardContainer}>
        <Container maxWidth="md">
          <Toolbar disableGutters className={classes.header}>
            <Link href="/">
              <img src="/logo.svg" alt="Logo" className={classes.logo} />
            </Link>
            <IconButton
              className={classes.toggleThemeButton}
              color="primary"
              onClick={toggleTheme}
              title="Dark Mode"
            >
              {theme.isDark ? (
                <ToggleOn fontSize="large" />
              ) : (
                <ToggleOffOutlined fontSize="large" />
              )}
            </IconButton>
          </Toolbar>
        </Container>
      </Card>
    </AppBar>
  );
};

export default Header;
