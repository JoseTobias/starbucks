import React from 'react';

import { render, RenderResult } from '@testing-library/react';

import Home from './Home';

let wrapper: RenderResult;

const mockGetStores = jest.mock('../../services/store/getStore', () => {
  return {
    getStores: jest.fn(() => Promise.resolve([])),
  };
});

describe('Layout component', () => {
  beforeEach(() => {
    wrapper = render(<Home />);
  });
  it('Should renders feedback if request fail', async () => {
    expect(
      wrapper.queryByText('Ainda não há lojas cadastradas')
    ).toBeInTheDocument();
  });
});
