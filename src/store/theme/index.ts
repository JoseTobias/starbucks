import { storageNames } from 'constants/storageNames';

import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';

export interface ThemeState {
  isDark: boolean;
}

const initialState: ThemeState = {
  isDark: Boolean(localStorage.getItem(storageNames.isDarkTheme)),
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDark = !state.isDark;

      if (state.isDark) {
        localStorage.setItem(storageNames.isDarkTheme, state.isDark.toString());
        return;
      }

      localStorage.removeItem(storageNames.isDarkTheme);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectTheme = (state: RootState): ThemeState => state.theme;

export default themeSlice.reducer;
