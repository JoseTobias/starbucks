import { configureStore } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import api from 'config/api';

import menuReducer, {
  MenusState,
  incrementItem,
  decrementItem,
  fetchMenu,
} from './index';

jest.mock('config/api');

describe('Menu reducer', () => {
  const initialState: MenusState = {
    loading: false,
    menus: [
      {
        storeId: 1,
        storeName: 'store_test',
        list: [
          {
            name: 'first_test',
            price: '2,00',
            amount: 1,
          },
          {
            name: 'second_test',
            price: '4,00',
            amount: 0,
          },
        ],
      },
    ],
  };
  it('should handle initial state', () => {
    expect(menuReducer(undefined, { type: 'unknown' })).toEqual({
      loading: false,
      menus: [],
    });
  });

  it('should handle incrementItem', () => {
    const item = { storeId: 1, itemName: 'first_test' };
    const actual = menuReducer(initialState, incrementItem(item));
    expect(actual.menus[0].list[0].amount).toEqual(2);
  });

  it('should handle decrementItem', () => {
    const item = { storeId: 1, itemName: 'first_test' };
    const actual = menuReducer(initialState, decrementItem(item));
    expect(actual.menus[0].list[0].amount).toEqual(0);
  });

  it('should not decrement', () => {
    const item = { storeId: 1, itemName: 'second_test' };
    const actual = menuReducer(initialState, decrementItem(item));
    expect(actual.menus[0].list[1].amount).toEqual(0);
  });

  it('should add menu to store if request returns valid data', async () => {
    (api.get as jest.Mocked<any>).mockResolvedValue({
      data: {
        storeId: 1,
        storeName: 'store_test',
        list: [
          {
            name: 'first_test',
            price: '2,00',
          },
          {
            name: 'second_test',
            price: '4,00',
          },
        ],
      },
    } as AxiosResponse);
    const store = configureStore({
      reducer(state, action) {
        switch (action.type) {
          case 'menus/fetchMenu/fulfilled':
            return {
              loading: false,
              menus: [action.payload],
            };
          default:
            return '';
        }
      },
    });
    await store.dispatch(fetchMenu(1));
    const state = store.getState();
    expect(state).toEqual({
      loading: false,
      menus: [
        {
          storeId: 1,
          storeName: 'store_test',
          list: [
            {
              name: 'first_test',
              price: '2,00',
              amount: 0,
            },
            {
              name: 'second_test',
              price: '4,00',
              amount: 0,
            },
          ],
        },
      ],
    });
  });
});
