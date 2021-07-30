import themeReducer, { ThemeState, toggleTheme } from './index';

describe('theme reducer', () => {
  const initialState: ThemeState = {
    isDark: false,
  };
  it('should handle initial state', () => {
    expect(themeReducer(undefined, { type: 'unknown' })).toEqual({
      isDark: false,
    });
  });

  it('should handle toggleTheme', () => {
    const actual = themeReducer(initialState, toggleTheme());
    expect(actual.isDark).toEqual(true);
  });
});
