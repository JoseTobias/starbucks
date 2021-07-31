import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import { ThemeState } from 'store/theme';

import Header from './index';

const theme: ThemeState = {
  isDark: false,
};

const toggleTheme = jest.fn();

const mockFunctions = {
  toggleTheme,
};

describe('Header component', () => {
  it('Should toggle theme if clicks on button', async () => {
    const wrapper = render(
      <Header theme={theme} toggleTheme={mockFunctions.toggleTheme} />
    );
    const button = wrapper.getByTitle('Dark Mode');
    await fireEvent.click(button);
    const encryptSpy = jest.spyOn(mockFunctions, 'toggleTheme');
    expect(encryptSpy).toHaveBeenCalledTimes(1);
  });
});
