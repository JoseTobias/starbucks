import React from 'react';

import { render, screen } from '@testing-library/react';
import { AxiosResponse } from 'axios';
import api from 'config/api';
import { BrowserRouter as Router } from 'react-router-dom';

import Home from './index';

jest.mock('config/api');

describe('Layout component', () => {
  it('Should renders feedback if request fail', async () => {
    (api.get as jest.Mocked<any>).mockRejectedValue({
      data: {
        status: 500,
        data: {
          message: 'Server Error',
        },
      },
    } as AxiosResponse);
    render(
      <Router>
        <Home />
      </Router>
    );
    expect(
      await screen.findByText(
        'Ainda não há lojas cadastradas',
        {},
        { timeout: 3000 }
      )
    ).toBeInTheDocument();
  });
  it('Should renders feedback if request returns empty data', async () => {
    (api.get as jest.Mocked<any>).mockResolvedValue({
      data: {
        data: [],
      },
    } as AxiosResponse);
    render(
      <Router>
        <Home />
      </Router>
    );
    expect(
      await screen.findByText(
        'Ainda não há lojas cadastradas',
        {},
        { timeout: 3000 }
      )
    ).toBeInTheDocument();
  });
  it('Should show data if request return fill data', async () => {
    (api.get as jest.Mocked<any>).mockResolvedValue({
      data: {
        data: [
          {
            city: 'test',
            neighborhood: 'test',
            image: 'test',
            id: 1,
          },
        ],
      },
    } as AxiosResponse);
    render(
      <Router>
        <Home />
      </Router>
    );
    expect(
      await screen.findByText(
        'Escolha a loja que deseja fazer o pedido',
        {},
        { timeout: 3000 }
      )
    ).toBeInTheDocument();
  });
});
