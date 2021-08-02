/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { render, screen } from '@testing-library/react';
import { AxiosResponse } from 'axios';
import api from 'config/api';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from 'store';

import Home from './index';

jest.mock('config/api');

describe('Layout component', () => {
  it('Should renders feedback if request fail', async () => {
    (api.get as jest.Mocked<any>).mockRejectedValue({
      status: 500,
      data: {
        message: 'Server Error',
      },
    } as AxiosResponse);
    render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>
    );
    expect(
      await screen.findByText('Não há itens no cardápio', {}, { timeout: 3000 })
    ).toBeInTheDocument();
  });
  it('Should renders feedback if request returns empty data', async () => {
    (api.get as jest.Mocked<any>).mockResolvedValue({
      data: {},
    } as AxiosResponse);
    render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>
    );
    expect(
      await screen.findByText('Não há itens no cardápio', {}, { timeout: 3000 })
    ).toBeInTheDocument();
  });
  it('Should show data if request return fill data', async () => {
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
    render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>
    );
    expect(
      await screen.findByText('Cardápio de store_test', {}, { timeout: 3000 })
    ).toBeInTheDocument();
  });
});
