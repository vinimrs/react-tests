import React from 'react';

import * as S from './styles';

const Header: React.FC = () => {
  return (
    <S.Header>
      <div role="img" aria-label="Logo do Sorteador" />
      <img
        src="/images/participante.png"
        alt="Participante segurando um presente em sua mão, ilustração."
      />
    </S.Header>
  );
};

export default Header;
