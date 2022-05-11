import { render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import ParticipantsList from '.';
import { useParticipantsList } from '../../state/hook';

jest.mock('../../state/hook', () => {
  return {
    useParticipantsList: jest.fn(),
  };
});

describe('in participants list empty', () => {
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue([]);
  });

  test('initializes empty', () => {
    render(
      <RecoilRoot>
        <ParticipantsList />
      </RecoilRoot>
    );

    const itens = screen.queryAllByRole('listitem');
    expect(itens).toHaveLength(0);
  });
});

describe('in participants list filled', () => {
  const participantsExample = ['Ana Luiza', 'Fernanda'];
  beforeEach(() => {
    (useParticipantsList as jest.Mock).mockReturnValue(participantsExample);
  });

  test('it must be fillable', () => {
    render(
      <RecoilRoot>
        <ParticipantsList />
      </RecoilRoot>
    );

    const itens = screen.queryAllByRole('listitem');
    expect(itens).toHaveLength(participantsExample.length);
  });
});
