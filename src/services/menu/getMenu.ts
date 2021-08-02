import Api from 'config/api';
import Endpoints from 'config/endpoints';

export interface MenuItem {
  name: string;
  price: string;
}

interface Response {
  storeName: string;
  storeId: number;
  list: Array<MenuItem>;
}

export const getMenuItens = async (store: number): Promise<Response> => {
  try {
    const { data } = await Api.get<Response>(Endpoints.menu.get(store));
    return data;
  } catch (error) {
    return {
      storeName: '',
      storeId: 0,
      list: [],
    };
  }
};
