import { useRecoilValue, useSetRecoilState } from 'recoil';
import { alertAtom, participantsListAtom } from '../atom';

export const useAddParticipant = () => {
  const setParticipantsList = useSetRecoilState<string[]>(participantsListAtom);
  const list = useRecoilValue<string[]>(participantsListAtom);
  const setError = useSetRecoilState<string>(alertAtom);

  return (participant: string) => {
    if (list.includes(participant)) {
      setError('Nomes duplicados não são permitidos');
      setTimeout(() => {
        setError('');
      }, 5000);
      return;
    }

    return setParticipantsList(list => [...list, participant]);
  };
};
