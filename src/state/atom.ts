import { atom } from 'recoil';

export const participantsListAtom = atom<string[]>({
  key: 'participantsListAtom',
  default: [],
});

export const raffleResultAtom = atom<Map<string, string>>({
  key: 'raffleResultAtom',
  default: new Map(),
});

export const alertAtom = atom<string>({
  key: 'alertAtom',
  default: '',
});
