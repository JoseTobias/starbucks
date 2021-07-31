import React from 'react';

import { CircularProgress, Box, Typography } from '@material-ui/core';

interface IProps {
  loading: boolean;
  message: string;
}

const LoadingFeedback: React.FC<IProps> = ({ loading, message }) => {
  return (
    <>
      {loading ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress title="spin" />
        </Box>
      ) : (
        <Box display="flex" justifyContent="center" mt={4}>
          <Typography>{message}</Typography>
        </Box>
      )}
    </>
  );
};

export default LoadingFeedback;
