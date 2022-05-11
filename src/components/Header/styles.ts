import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  padding-top: 120px;

  & > img {
    z-index: 1;
  }

  & > div {
    background-image: url('/images/logo-maior.png');
    width: 351px;
    height: 117px;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    padding-top: 60px;
    flex-direction: column;
    align-items: center;
    & > img {
      background-image: url('/imagens/logo.png');
      width: 235px;
      height: 199px;
    }
  }
`;
