import { render } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import Setting from '.';
import theme from '../../styles/theme';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigate,
  };
});

describe('in Setting page', () => {
  test('must be rendered correctly', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <Setting />
        </RecoilRoot>
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
  });
});
