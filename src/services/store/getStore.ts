import Api from 'config/api';
import Endpoints from 'config/endpoints';

export interface ErrorData {
  message: string;
  status: number;
}

export interface Store {
  city: string;
  neighborhood: string;
  image: string;
  id: number;
}

interface Response {
  data: Array<Store>;
}

export const getStores = (): Promise<Array<Store>> => {
  return new Promise(async (resolve, reject) => {
    try {
      const {
        data: { data },
      } = await Api.get<Response>(Endpoints.stores.get);
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
