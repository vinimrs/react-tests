import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import Footer from '.';
import { useParticipantsList } from '../../state/hook';
import theme from '../../styles/theme';

const mockRaffle = jest.fn();

jest.mock('../../state/hook', () => {
  return {
    useParticipantsList: jest.fn(),
    useRaffler: () => mockRaffle,
  };
});

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mockNavigate,
  };
});

describe('in footer and if there are no participants', () => {
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue([]);
  });

  test('we cannot start the game', () => {
    render(
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <Footer />
        </RecoilRoot>
      </ThemeProvider>
    );

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });
});

describe('in footer and if there are participants', () => {
  const participantsExample = ['Nathália', 'Joaquin', 'Paula'];
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(participantsExample);
  });

  test('we cannot start the game', () => {
    render(
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <Footer />
        </RecoilRoot>
      </ThemeProvider>
    );

    const button = screen.getByRole('button');

    expect(button).not.toBeDisabled();
  });

  test('we starts the game', () => {
    render(
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <Footer />
        </RecoilRoot>
      </ThemeProvider>
    );

    const button = screen.getByRole('button');

    fireEvent.click(button);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith('/raffle');
    expect(mockRaffle).toHaveBeenCalledTimes(1);
  });
});
