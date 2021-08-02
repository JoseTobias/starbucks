import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import menus from 'store/menu';
import theme from 'store/theme';

export const store = configureStore({
  reducer: {
    theme,
    menus,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
