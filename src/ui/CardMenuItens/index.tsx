import React from 'react';

import { Card, Typography, Box, IconButton } from '@material-ui/core';
import {
  AddCircleOutlineOutlined,
  RemoveCircleOutlineOutlined,
} from '@material-ui/icons';

import { useStyles } from './styles';
export interface CardMenuItensProps {
  name: string;
  price: string;
  amount: number;
  decrease: () => void;
  add: () => void;
}

export const CardMenuItens: React.FC<CardMenuItensProps> = ({
  name,
  price,
  amount,
  decrease,
  add,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Typography>{name}</Typography>
      <Box display="flex" alignItems="center">
        <IconButton color="primary" title="Adicionar" onClick={add}>
          <AddCircleOutlineOutlined fontSize="inherit" />
        </IconButton>
        <Typography color="textSecondary">{amount}</Typography>
        <IconButton color="primary" title="Diminuir" onClick={decrease}>
          <RemoveCircleOutlineOutlined fontSize="inherit" />
        </IconButton>
        <Typography color="textSecondary">{price}R$</Typography>
      </Box>
    </Card>
  );
};

export default CardMenuItens;
