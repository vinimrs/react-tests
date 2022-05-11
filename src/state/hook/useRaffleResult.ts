import { useRecoilValue } from 'recoil';
import { raffleResultAtom } from '../atom';

export const useRaffleResult = () => {
  return useRecoilValue<Map<string, string>>(raffleResultAtom);
};
