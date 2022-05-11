import shuffle from 'just-shuffle';

export function startRaffle(participants: string[]) {
  const participantsLength = participants.length;
  const shuffled = shuffle(participants);
  const result = new Map<string, string>();

  for (let index = 0; index < participantsLength; index++) {
    const friendIndex = index === participantsLength - 1 ? 0 : index + 1;
    result.set(shuffled[index], shuffled[friendIndex]);
  }

  return result;
}
