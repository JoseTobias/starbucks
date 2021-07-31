import React from 'react';

import { Card, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { utilsStyles } from 'utils/styles';

import { useStyles } from './styles';

export interface CardStoreProps {
  city: string;
  neighborhood: string;
  image: string;
  id: number;
}

export const CardStore: React.FC<CardStoreProps> = ({
  city,
  image,
  neighborhood,
  id,
}) => {
  const classes = useStyles();
  const { removeTextDecoration } = utilsStyles();
  return (
    <Link to={`/${id}`} className={removeTextDecoration}>
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
