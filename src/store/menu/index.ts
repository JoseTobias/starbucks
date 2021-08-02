import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { getMenuItens } from 'services/menu/getMenu';
import { RootState } from 'store';
import { convertMenuItensRequestToMenuItens, Menu } from 'utils/convert';
import { findIndex } from 'utils/find';
import { isEmpty } from 'utils/validations';

export const fetchMenu = createAsyncThunk(
  'menus/fetchMenu',
  async (storeId: number) => {
    const data = await getMenuItens(storeId);
    if (!isEmpty(data)) {
      const menuItem = convertMenuItensRequestToMenuItens(
        data.list,
        data.storeId,
        data.storeName
      );
      return menuItem;
    }

    return {
      storeId: 0,
      storeName: '',
      list: [],
    };
  }
);

export interface MenusState {
  loading: boolean;
  menus: Array<Menu>;
}

const initialState: MenusState = {
  loading: false,
  menus: [],
};

export const menuSlice = createSlice({
  name: 'menus',
  initialState,
  reducers: {
    incrementItem: (
      state,
      action: PayloadAction<{ storeId: number; itemName: string }>
    ) => {
      const storeIndex = findIndex(
        state.menus,
        'storeId',
        action.payload.storeId
      );
      const menuIndex = findIndex(
        state.menus[storeIndex].list,
        'name',
        action.payload.itemName
      );
      state.menus[storeIndex].list[menuIndex].amount++;
    },
    decrementItem: (
      state,
      action: PayloadAction<{ storeId: number; itemName: string }>
    ) => {
      const storeIndex = findIndex(
        state.menus,
        'storeId',
        action.payload.storeId
      );
      const menuIndex = findIndex(
        state.menus[storeIndex].list,
        'name',
        action.payload.itemName
      );
      const notNull = state.menus[storeIndex].list[menuIndex].amount > 0;
      if (notNull) {
        state.menus[storeIndex].list[menuIndex].amount--;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.loading = false;
        if (!action.payload.storeName) {
          return;
        }

        const storeIndex = findIndex(
          state.menus,
          'storeId',
          action.payload.storeId
        );
        const notFound = storeIndex === -1;
        if (notFound) {
          state.menus.push(action.payload);
        }
      });
  },
});

export const { incrementItem, decrementItem } = menuSlice.actions;

export const selectMenus = (state: RootState): MenusState => state.menus;

export default menuSlice.reducer;
