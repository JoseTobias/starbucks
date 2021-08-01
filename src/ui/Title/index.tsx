import React from 'react';

import { Box, Typography } from '@material-ui/core';

interface IProps {
  title: string;
}

const Title: React.FC<IProps> = ({ title }) => {
  return (
    <Box marginTop={4}>
      <Typography variant="h4" align="center">
        {title}
      </Typography>
    </Box>
  );
};

export default Title;
