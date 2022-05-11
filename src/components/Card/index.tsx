import React, { ReactText } from 'react';
import { CardWrapper } from './styles';
// import { Container } from './styles';

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <CardWrapper>{children}</CardWrapper>;
};

export default Card;
