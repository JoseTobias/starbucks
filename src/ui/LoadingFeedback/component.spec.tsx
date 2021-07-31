import React from 'react';

import { render } from '@testing-library/react';

import Feedback from './index';

describe('LoadingFeedback component', () => {
  it('Should render spin loader', async () => {
    const wrapper = render(
      <Feedback loading={true} message={'test loading'} />
    );
    expect(wrapper.getByTitle('spin')).toBeInTheDocument();
  });
  it('Should render feedback message', async () => {
    const wrapper = render(
      <Feedback loading={false} message={'test loading'} />
    );
    expect(wrapper.getByText('test loading')).toBeInTheDocument();
  });
});
