import React, { ReactNode } from 'react';

import Container from '@material-ui/core/Container';

import Header from '../HeaderControl';

interface IProps {
  children: ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Header testId="header" />
      <Container maxWidth="md">
        <div>{children}</div>
      </Container>
    </>
  );
};

export default Layout;
