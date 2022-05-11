import styled from 'styled-components';

export const CardWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.black};
  box-sizing: border-box;
  border-radius: 64px 64px 0px 0px;
  padding: 80px;
  display: flex;
  flex: 1;
  margin-top: -32px;
  justify-content: center;
`;
