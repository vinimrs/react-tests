import { useParticipantsList } from './useParticipantsList';
import shuffle from 'just-shuffle';
import { useSetRecoilState } from 'recoil';
import { raffleResultAtom } from '../atom';
import { startRaffle } from '../helpers/startRaffle';

export const useRaffler = () => {
  const participants = useParticipantsList();

  const setResult = useSetRecoilState<Map<string, string>>(raffleResultAtom);

  return () => {
    const result = startRaffle(participants);
    setResult(result);
  };
};
