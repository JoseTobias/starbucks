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

export const getStores = async (): Promise<Array<Store>> => {
  try {
    const {
      data: { data },
    } = await Api.get<Response>(Endpoints.stores.get);
    return data;
  } catch (_) {
    return [];
  }
};
