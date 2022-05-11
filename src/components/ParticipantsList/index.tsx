import React from 'react';
import { useParticipantsList } from '../../state/hook';

// import { Container } from './styles';

const ParticipantsList: React.FC = () => {
  const list = useParticipantsList();

  return (
    <ul>
      {list.map(participant => (
        <li key={participant}>{participant}</li>
      ))}
    </ul>
  );
};

export default ParticipantsList;
