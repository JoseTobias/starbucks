import React from 'react';

import { Card, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { utilsStyles } from 'utils/styles';

import { useStyles } from './styles';

interface IProps {
  city: string;
  neighborhood: string;
  image: string;
  storeId: string;
}

const CardStore: React.FC<IProps> = ({
  city,
  image,
  neighborhood,
  storeId,
}) => {
  const classes = useStyles();
  const { removeTextDecoration } = utilsStyles();
  return (
    <Link to={`/${storeId}`} className={removeTextDecoration}>
      <Card className={classes.card}>
        <Box>
          <Typography variant="h5">{city}</Typography>
          <Typography color="textSecondary">{neighborhood}</Typography>
        </Box>
        <img className={classes.image} src={image} />
      </Card>
    </Link>
  );
};

export default CardStore;
