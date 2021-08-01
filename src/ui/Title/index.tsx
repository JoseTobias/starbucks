import React from 'react';

import { Box, Typography } from '@material-ui/core';

interface IProps {
  children: React.ReactNode;
}

const Title: React.FC<IProps> = ({ children }) => {
  return (
    <Box marginTop={4}>
      <Typography variant="h4" align="center">
        {children}
      </Typography>
    </Box>
  );
};

export default Title;
