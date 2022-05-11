import { useRecoilValue } from 'recoil';
import { participantsListAtom } from '../atom';

export const useParticipantsList = () => {
  const list = useRecoilValue<string[]>(participantsListAtom);
  return list;
};
