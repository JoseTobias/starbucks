import React from 'react';

import { render } from '@testing-library/react';

import Layout from './index';

test('renders Layout children', () => {
  const { getByText } = render(
    <Layout>
      <p>children</p>
    </Layout>
  );
  expect(getByText(/children/i)).toBeInTheDocument();
});
