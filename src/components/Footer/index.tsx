import React, { MouseEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useParticipantsList, useRaffler } from '../../state/hook';
import * as Global from '../../styles/GlobalComponents';
// import { Container } from './styles';

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${({ theme }) => theme.breakpoints.md} {
    flex-direction: column;

    & > img {
      margin-top: 32px;
    }
  }
`;

const Footer: React.FC = () => {
  const participants = useParticipantsList();

  const navigate = useNavigate();

  const raffler = useRaffler();

  const handleClick: MouseEventHandler<HTMLButtonElement> = e => {
    raffler();
    navigate('/raffle');
  };

  return (
    <FooterContainer>
      <Global.CustomButton
        onClick={handleClick}
        disabled={participants.length < 3}
      >
        Iniciar brincadeira!
      </Global.CustomButton>
      <img src="/images/sacolas.png" alt="Sacolas de compras" />
    </FooterContainer>
  );
};

export default Footer;
