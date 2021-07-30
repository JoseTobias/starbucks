import React, { ReactNode } from 'react';

import Container from '@material-ui/core/Container';

interface IProps {
  children: ReactNode;
}

const components: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Container maxWidth="md">
        <div>{children}</div>
      </Container>
    </>
  );
};

export default components;
