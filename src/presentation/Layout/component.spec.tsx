import React from 'react';

import { render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'store';

import Layout from './index';

let wrapper: RenderResult;

describe('', () => {
  beforeEach(() => {
    wrapper = render(
      <Provider store={store}>
        <Layout>
          <p>children</p>
        </Layout>
      </Provider>
    );
  });
  it('Should renders children', () => {
    expect(wrapper.getByText(/children/i)).toBeInTheDocument();
  });
  it('Should renders Header', () => {
    expect(wrapper.getByTestId(/header/i)).toBeInTheDocument();
  });
});
