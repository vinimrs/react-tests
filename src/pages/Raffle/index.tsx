import React, { ChangeEventHandler, FormEventHandler, useState } from 'react';
import Card from '../../components/Card';
import { useParticipantsList } from '../../state/hook';
import { useRaffleResult } from '../../state/hook/';

import * as S from './styles';

const Raffle: React.FC = () => {
  const [currentParticipant, setCurrentParticipant] = useState('');
  const [secretFriend, setSecretFriend] = useState('');

  const participants = useParticipantsList();

  const result = useRaffleResult();

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    if (result.has(currentParticipant)) {
      setSecretFriend(result.get(currentParticipant)!);
    }
  };

  const handleChange: ChangeEventHandler<HTMLSelectElement> = e =>
    setCurrentParticipant(e.target.value);

  return (
    <Card>
      <S.RaffleSection>
        <h2>Quem vai tirar o papelzinho?</h2>
        <form onSubmit={handleSubmit}>
          <select
            value={currentParticipant}
            onChange={handleChange}
            required
            name="currentParticipant"
            placeholder="Selecione o seu nome"
          >
            <option>Selecione seu nome</option>
            {participants.map(part => (
              <option key={part}>{part}</option>
            ))}
          </select>
          <p>Clique em sortear para ver quem é seu amigo secreto!</p>
          <S.CustomButton type="submit">Sortear</S.CustomButton>
        </form>
        {secretFriend && (
          <p className="result" role="alert">
            {secretFriend}
          </p>
        )}
        <footer>
          <img src="/images/aviao.png" alt="Avião de papel, ilustração" />
        </footer>
      </S.RaffleSection>
    </Card>
  );
};

export default Raffle;
