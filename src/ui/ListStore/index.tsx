import React from 'react';

import { Box, Typography } from '@material-ui/core';

import { CardStoreProps, CardStore } from '../CardStore';
interface IProps {
  list: Array<CardStoreProps>;
}

const ListStore: React.FC<IProps> = ({ list }) => {
  return (
    <>
      <Box marginTop={4}>
        <Typography variant="h4" align="center">
          Escolha a loja que deseja fazer o pedido
        </Typography>
      </Box>
      {list.map((card, index) => (
        <Box marginTop={2} key={index}>
          <CardStore
            city={card.city}
            neighborhood={card.neighborhood}
            image={card.image}
            id={card.id}
          />
        </Box>
      ))}
    </>
  );
};

export default ListStore;
