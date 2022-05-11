import styled, { css } from 'styled-components';

export const borderAndShadow = css`
  border: 2px solid ${({ theme }) => theme.colors.black};
  border-radius: 37.5px;
  box-shadow: 4px 4px 0px ${({ theme }) => theme.colors.black};
`;

export const CustomInputContainer = styled.div`
  margin-bottom: 32px;
  font-size: ${({ theme }) => theme.fonts.size.sm};

  & > input {
    ${borderAndShadow}
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    background-color: #fff;
    padding-left: 32px;
    height: 82px;
    width: 70%;
    color: ${({ theme }) => theme.colors.text};

    &:focus {
      outline: none;
    }
    &::placeholder {
      color: ${({ theme }) => theme.colors.black}4D;
    }
  }

  & > button {
    ${borderAndShadow}
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    height: 82px;
    width: 30%;
    background-color: ${({ theme }) => theme.colors.gray};
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    & > input {
      display: block;
      width: 100%;
      border-radius: 45px;
      box-shadow: 0px 2px 0px 1px #000000;
      margin-bottom: 18px;
    }

    & > button {
      display: block;
      margin-top: 16px;
      margin: 0 auto;
      width: 220px;
      border-radius: 45px;
    }
  }
`;

export const CustomButton = styled.button`
  width: 350px;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.size.sm};
  cursor: pointer;
  margin: 8px;

  ${borderAndShadow}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.purple};
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    width: 220px;
    margin: 32px 0;
  }
`;
