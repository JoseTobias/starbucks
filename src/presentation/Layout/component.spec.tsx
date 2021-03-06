import React from 'react';

import { render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'store';

import Layout from './index';

let wrapper: RenderResult;

describe('Layout component', () => {
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
    expect(wrapper.getByText('children')).toBeInTheDocument();
  });
  it('Should renders Header', () => {
    expect(wrapper.getByTitle('Dark Mode')).toBeInTheDocument();
  });
});
