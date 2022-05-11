import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import Raffle from '.';
import { useParticipantsList, useRaffleResult } from '../../state/hook';
import theme from '../../styles/theme';

jest.mock('../../state/hook', () => {
  return {
    useParticipantsList: jest.fn(),
    useRaffleResult: jest.fn(),
  };
});

describe('in Raffle Page', () => {
  const participantsExample = ['Ana', 'Maria', 'Nathalia'];
  const result = new Map([
    ['Ana', 'Nathalia'],
    ['Nathalia', 'Maria'],
    ['Maria', 'Ana'],
  ]);

  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(participantsExample);
    (useRaffleResult as jest.Mock).mockReturnValue(result);
  });
  test('all participants can show theirs secret friend', () => {
    render(
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <Raffle />
        </RecoilRoot>
      </ThemeProvider>
    );

    const options = screen.queryAllByRole('option');
    expect(options).toHaveLength(participantsExample.length + 1); // ja temos uma option por padrão
  });

  test('the secret friend is displayed upon request', () => {
    render(
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <Raffle />
        </RecoilRoot>
      </ThemeProvider>
    );

    const select = screen.getByRole('combobox');

    fireEvent.change(select, {
      target: {
        value: participantsExample[0],
      },
    });

    const button = screen.getByRole('button');

    fireEvent.click(button);

    const amigoSecreto = screen.getByRole('alert');

    expect(amigoSecreto).toBeInTheDocument();
  });
});
