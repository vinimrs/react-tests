import styled from 'styled-components';
import { borderAndShadow } from '../../styles/GlobalComponents';
export * from '../../styles/GlobalComponents';

export const RaffleSection = styled.section`
  & > footer {
    margin: 64px 0%;
  }

  & > .result {
    color: ${({ theme }) => theme.colors.orange};
    font-size: ${({ theme }) => theme.fonts.size.md};
  }

  & > form > select {
    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari and Chrome */
    appearance: none;
    height: 82px;
    background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-position: top 27px right 17px;
    background-repeat: no-repeat;
    width: 70%;
    padding: 0 32px;
    margin-bottom: 42px;
    font-size: ${({ theme }) => theme.fonts.size.sm};
    ${borderAndShadow}

    &:focus {
      outline: none;
    }
  }

  & > p {
    font-size: 20px;
    font-weight: 200;
    margin: 32px 0;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    & > select {
      width: 100%;
    }
  }
`;
