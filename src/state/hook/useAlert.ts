import { useRecoilValue } from 'recoil';
import { alertAtom } from '../atom';

export const useAlert = () => {
  const message = useRecoilValue<string>(alertAtom);

  return message;
};
