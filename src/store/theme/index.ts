import { storageNames } from 'constants/storageNames';

import { createSlice } from '@reduxjs/toolkit';
import { StorageService } from 'services/storage';
import { RootState } from 'store';

export interface ThemeState {
  isDark: boolean;
}

const storage = new StorageService();

const initialState: ThemeState = {
  isDark: Boolean(storage.getItem(storageNames.isDarkTheme)),
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDark = !state.isDark;

      if (state.isDark) {
        storage.saveOrUpdateItem(storageNames.isDarkTheme, state.isDark);
        return;
      }

      storage.removeItem(storageNames.isDarkTheme);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectTheme = (state: RootState): ThemeState => state.theme;

export default themeSlice.reducer;
