import React from 'react';

import { Box } from '@material-ui/core';
import { useAppDispatch } from 'hooks';
import { incrementItem, decrementItem } from 'store/menu';
import { CardMenuItens } from 'ui/CardMenuItens';
import Title from 'ui/Title';

export interface CardMenuItensProps {
  name: string;
  price: string;
  amount: number;
}

export interface ListItensProps {
  storeName: string;
  storeId: number;
  list: Array<CardMenuItensProps>;
}

export const ListMenuItens: React.FC<ListItensProps> = ({
  list,
  storeId,
  storeName,
}) => {
  const dispatch = useAppDispatch();

  const add = (name: string) => {
    dispatch(incrementItem({ storeId, itemName: name }));
  };

  const decrement = (name: string) => {
    dispatch(decrementItem({ storeId, itemName: name }));
  };

  return (
    <>
      <Title>Cardápio de {storeName}</Title>
      {list.map((card, index) => (
        <Box marginTop={2} key={index}>
          <CardMenuItens
            name={card.name}
            price={card.price}
            amount={card.amount}
            add={() => add(card.name)}
            decrease={() => decrement(card.name)}
          />
        </Box>
      ))}
    </>
  );
};

export default ListMenuItens;
