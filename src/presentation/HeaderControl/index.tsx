import React from 'react';

import { useAppDispatch, useAppSelector } from 'hooks';
import { toggleTheme, selectTheme } from 'store/theme';
import Header from 'ui/Header';

const HeaderControl: React.FC<{ testId?: string }> = ({ testId }) => {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  return (
    <Header
      theme={theme}
      toggleTheme={() => dispatch(toggleTheme())}
      testId={testId}
    />
  );
};

export default HeaderControl;
