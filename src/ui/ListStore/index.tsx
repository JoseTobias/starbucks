import React from 'react';

import { Box } from '@material-ui/core';

import { CardStoreProps, CardStore } from '../CardStore';
import Title from '../Title';
interface IProps {
  list: Array<CardStoreProps>;
}

const ListStore: React.FC<IProps> = ({ list }) => {
  return (
    <>
      <Title title="Escolha a loja que deseja fazer o pedido" />
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
