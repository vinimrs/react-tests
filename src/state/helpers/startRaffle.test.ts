import { startRaffle } from './startRaffle';

describe('in a Raffle of Secret Friend', () => {
  test('each participant cannot withdraw his own name', () => {
    const participants = [
      'Joaquin',
      'Joana',
      'Valentina',
      'Vinícius',
      'Matheus',
      'Jefferson',
      'Yuri',
    ];

    const raffle = startRaffle(participants);

    participants.forEach(part => {
      const secretFriend = raffle.get(part);
      expect(secretFriend).not.toEqual(part);
    });
  });
});
