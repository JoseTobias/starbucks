import Api from 'config/api';
import Endpoints from 'config/endpoints';

export interface ErrorData {
  message: string;
  status: number;
}

export interface MenuItem {
  name: string;
  price: string;
}

interface Response {
  storeName: string;
  storeId: number;
  list: Array<MenuItem>;
}

export const getMenuItens = (store: number): Promise<Response> => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await Api.get<Response>(Endpoints.menu.get(store));
      return resolve(data);
    } catch (error) {
      const response: ErrorData = { message: '', status: 500 };
      if (error.response) {
        response.message = error.response.statusText;
        response.status = error.response.status;
      }

      return reject(response);
    }
  });
};
