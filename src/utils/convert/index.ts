import { MenuItem as MenuItemRequest } from 'services/menu/getMenu';

export interface MenuItem {
  name: string;
  price: string;
  amount: number;
}

export interface Menu {
  storeName: string;
  storeId: number;
  list: Array<MenuItem>;
}

export const convertMenuItensRequestToMenuItens = (
  client: Array<MenuItemRequest>,
  storeId: number,
  storeName: string
): Menu => {
  const list = client.map((item) => {
    return {
      name: item.name,
      price: item.price,
      amount: 0,
    };
  });
  return {
    storeId,
    storeName,
    list,
  };
};
